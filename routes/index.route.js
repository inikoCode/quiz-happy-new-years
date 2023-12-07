const router = require('express').Router();

const themesRouter = require('./view/themes.route');

router.use('/themes', themesRouter);

module.exports = router;
