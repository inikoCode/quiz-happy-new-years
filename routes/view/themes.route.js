const router = require('express').Router();

const { Theme, Qestion } = require('../../db/models');
const ThemesPage = require('../../components/ThemesPage');
const ThemeItem = require('../../components/ThemeItem');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({ include: Qestion });
    const html = res.renderComponent(ThemesPage, {
      title: 'ТЕМЫ',
      themes,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/:themeId/question/:qestionId', async (req, res) => {
  const { themeId, qestionId } = req.params;
  if (qestionId === '6' && themeId === '1') {
    res.redirect('/themes');
    return;
  }
  if (qestionId === '14') {
    res.redirect('/themes');
    return;
  }
  const question = await Qestion.findOne({
    where: { theme_id: themeId, id: qestionId },
  });
  console.log(question, '<====');
  const html = res.renderComponent(ThemeItem, { title: 'вопросы', question });
  res.send(html);
});

router.post('/:themeId/question/:qestionId', async (req, res) => {
  const { answer, id } = req.body;
  console.log(answer, '3');
  const data = await Qestion.findOne({ where: { id } });
  if (data.answer.toLowerCase() === answer.toLowerCase()) {
    res.json({ message: 'success' });
  } else {
    res.json({ message: 'ты дурында!!!!!' });
  }
});

module.exports = router;
