const router = require('express').Router();

const mainRoutes = require('./view/main.routes');
const registrationRouter = require('./view/registration.routes')

router.use('/', mainRoutes);
router.use('/registration', registrationRouter);

module.exports = router;
