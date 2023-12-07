const router = require('express').Router();

const mainRoutes = require('./view/main.routes');
const registrationRouter = require('./view/registration.routes')
const themesRouter = require('./view/themes.route');

router.use('/', mainRoutes);
router.use('/themes', themesRouter);
router.use('/registration', registrationRouter);

module.exports = router;
