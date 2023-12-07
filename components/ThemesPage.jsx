const React = require('react');
const Layout = require('./Layout');
const Theme = require('./Theme');

function ThemesPage({ themes }) {
  return (
    <Layout>
      <div>
        {themes.map((themeObj) => (
          <Theme theme={themeObj} key={themeObj.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
