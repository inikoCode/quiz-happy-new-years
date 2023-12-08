const router = require('express').Router();
const RegistrationPage = require('../../components/RegistrationPage');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  const registration = res.renderComponent(RegistrationPage, {
    title: 'Registration',
  });
  res.send(registration);
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    // console.log(data, '<========');
    if (data) {
      const user = await User.create(data);
      res.app.locals.user = user;
      console.log(res.app.locals.user, '=====');
      res.status(200).json({ message: 'success' });
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch ({ message }) {
    // console.log(message);
    res.status(500).json(message);
  }
});

module.exports = router;
