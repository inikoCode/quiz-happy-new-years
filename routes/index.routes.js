const router = require('express').Router();

const mainRoutes = require('./view/main.routes');
const registrationRouter = require('./view/registration.routes')
const themesRouter = require('./view/themes.route');
const notFoundRouter = require('./view/404.router');


router.use('/', mainRoutes);
router.use('/themes', themesRouter);
router.use('/registration', registrationRouter);
router.use('*', notFoundRouter);


module.exports = router;
