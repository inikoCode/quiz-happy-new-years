const React = require('react');
const Layout = require('./Layout');

function RegistrationPage() {
  return (
    <Layout>
      <form className="formAddStudents">
        <input placeholder="имя" type="text" name="name" />
        <input placeholder="номер телефона" type="bigint" name="phoneNumber" />
        <input placeholder="фотография" type="text" name="photo" />
        <button type="submit">Добавить</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
