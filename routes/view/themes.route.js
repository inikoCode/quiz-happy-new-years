const router = require('express').Router();

const { Theme } = require('../../db/models');
const ThemesPage = require('../../components/ThemesPage');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const html = res.renderComponent(ThemesPage, {
      title: 'ТЕМЫ',
      themes,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/theme/:nameId', (req, res) => {
  res.send('страница темы');
});
module.exports = router;
