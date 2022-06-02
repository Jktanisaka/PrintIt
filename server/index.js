require('dotenv/config');
const pg = require('pg');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

app.post('/api/uploads', express.urlencoded(), uploadsMiddleware, (req, res, next) => {
  /*  insert an entry -
      insert url for each file uploaded-
      insert all supplied tags-
      insert association between tags and entries-
  */
  const sql = `
  with "newEntry" as (
    insert into "entries" ("userId", "description", "title", "printer", "totalFilamentUsed", "timeToPrint", "createdAt", "printSpeed", "supports", "layerHeight", "wallThickness", "additionalDetails", "imageUrl")
    values (1, $1, $2, $3, $4, $5, now(), $6, $7, $8, $9, $10, $11)
    returning "entryId"
  ), "newFiles" as (
    insert into "files" ("entryId", "fileUrl")
    select "entryId", unnest($12::text[])
    from "newEntry"
  ), "newTags" as (
    insert into "tags" ("label")
    select unnest($13::text[]) on conflict("label") do nothing
    returning "tagId"
  ), "associatedTags" as (
    insert into "entryTags" ("entryId", "tagId")
    select "ne"."entryId", "t"."tagId"
    from "newEntry" as "ne"
    join (
      select "nt"."tagId"
      from "newTags" as "nt"
      union
      select "ot"."tagId"
      from "tags" as "ot"
      where "ot"."label" = any ($13::text[])
    ) as "t" on true
  )
  select * from "newEntry"


  `;
  const {
    description, title, printer, totalFilamentUsed, timeToPrint,
    printSpeed, supports, layerHeight, wallThickness, additionalDetails,
    tags
  } = req.body;
  const image = req.files.image[0];
  const imageUrl = '/uploads/' + image.filename;
  const objectFileUrls = req.files.objects.map(file => {
    return '/uploads/' + file.filename;
  });
  const params = [description, title, printer, totalFilamentUsed, timeToPrint,
    printSpeed, supports, layerHeight, wallThickness, additionalDetails, imageUrl,
    objectFileUrls, tags];
  db.query(sql, params)
    .then(result => {
      const response = result.rows;
      res.status(201).json(response);
    })
    .catch(error => next(error));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
