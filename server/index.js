require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

// app.post('/api/uploads', req, res, next => {
//   const sql = `
//   insert into "entries" ("description", "title", "printer", "totalFilamentUsed", "timeToPrint", "createdAt" "printSpeed", "supports", "layerHeight", "wallThickness", "additionalDetails", "imageUrl")
//   values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
//   `
// })

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
