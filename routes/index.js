const router = require('express').Router();

// // Import our modular routers for /tips and /feedback
const indexRouter = require('./index');
// const feedbackRouter = require('./feedback');
// const diagnosticsRouter = require('./diagnostics');

// router.use('./index', indexRouter);
// router.use('/feedback', feedbackRouter);
// router.use('/diagnostics', diagnosticsRouter);
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
  );
module.exports = router;
