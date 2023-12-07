const router = require('express').Router();

const ThemesPage = require('../../components/ThemesPage');
const { Theme } = require('./db/models');

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
