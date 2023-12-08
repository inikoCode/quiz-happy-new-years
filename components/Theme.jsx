const React = require('react');

function Theme({ theme }) {
  return (
    <div className='oneTheme'>
      <h2>
        <a className='themeLink' href={`/themes/theme/${theme.id}`}>{theme.name}</a>
      </h2>
      <img style={{width:'100%'}} src={theme.photo} alt="themephoto" />
    </div>
  );
}

module.exports = Theme;
