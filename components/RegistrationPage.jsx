const React = require('react');
const Layout = require('./Layout');

function RegistrationPage() {
  return (
    <Layout>
      <form className="formAddUser">
        <h2>Регистрация</h2>
        <input
          name="name"
          className="inputRegistration"
          placeholder="имя"
          type="text"
        />
        <input
          name="email"
          className="inputRegistration"
          placeholder="email"
          type="email"
        />
        <input
          name="password"
          className="inputRegistration"
          placeholder="password"
          type="password"
        />
        <button className="inputRegaButton" type="submit">
          Добавить
        </button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
