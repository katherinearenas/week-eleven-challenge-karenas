const app = express();
const router = require('express').Router();

// Import our files containing our routes
const htmlRoutes = require('/');
const apiRoutes = require('/notes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);


module.exports = router;
 