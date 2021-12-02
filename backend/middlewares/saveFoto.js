const multer = require('multer');

module.exports = (err, req, res, next) => {
  const storage = multer.diskStorage({
    destination(request, file, cb) {
      cb(null, 'uploads/');
    },
    filename(request, file, cb) {
      let ext = '';
      if (file.originalname.split('.').length > 1) {
        ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      }
      cb(null, Date.now() + ext);
    },
  });
  const upload = multer({ storage });
  upload.single('feedbackWb');
  next();
};
