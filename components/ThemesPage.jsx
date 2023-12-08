const React = require('react');
const Layout = require('./Layout');
const Theme = require('./Theme');

function ThemesPage({ themes, user }) {
  return (
    <Layout>
      <div>
        {user && user.name ? (
          <div>
            <h2>Привет, мой хороший {user.name}</h2>
            {themes.map((themeObj) => (
              <Theme theme={themeObj} key={themeObj.id}  />
            ))}
          </div>
        ) : (
          <div className="needRegistration">
            <h1 style={{ marginTop: '15px' }}>
              Увы и ах, нужно зарегистрироваться
            </h1>
            <img
              style={{ marginTop: '20px' }}
              src="img/maxresdefault.jpg"
              alt="vlad"
            ></img>
            <div>
              <h3 style={{ marginTop: '20px' }}>
                <a href="/registration">тыкай сюда</a>
              </h3>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
