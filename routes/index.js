
const router = require('express').Router();


// Import our files containing our routes
const htmlRoutes = require('./htmlroutes');
const apiRoutes = require('./apiroutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);


module.exports = router;
 