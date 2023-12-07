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

module.exports = router;

