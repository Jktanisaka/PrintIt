const path = require('path');
const multer = require('multer');

const imagesDirectory = path.join(__dirname, 'public/uploads');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, imagesDirectory);
  },
  filename: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname);
    const name = `${file.originalname}-${Date.now()}${fileExtension}`;
    callback(null, name);
  }
});

const uploadsMiddleware = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'objects' }
]);

module.exports = uploadsMiddleware;
