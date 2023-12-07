const router = require('express').Router();
const RegistrationPage = require('../../components/RegistrationPage');

router.get('/', (req, res) => {
  const registration = res.renderComponent(RegistrationPage, {
    title: 'Registration',
  });
  res.send(registration);
});

module.exports = router;
