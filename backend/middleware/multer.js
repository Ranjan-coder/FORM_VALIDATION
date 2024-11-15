const multer = require('multer');
const path = require('path');
const fs = require('fs');  // Import the file system module

// Define the upload directory
const uploadDirectory = 'public/uploads';

// Check if the upload directory exists, if not create it
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });  // Create directory recursively
}

// Set up the storage location and filename for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory); // Use the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
