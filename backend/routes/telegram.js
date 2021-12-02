const router = require('express').Router();
const multer = require('multer');
const { sendFoto } = require('../controllers/telegrams');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    let ext = '';
    if (file.originalname.split('.').length > 1) {
      ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    }
    cb(null, Date.now() + ext);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png'
  || file.mimetype === 'image/jpg'
  || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: '6mb' },
  fileFilter,
});

router.post('/sendfoto', upload.single('feedbackWb'), sendFoto);
module.exports = router;
