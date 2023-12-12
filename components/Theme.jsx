const React = require('react');

function Theme({ theme }) {
  console.log(theme.Qestions, 1111);
  return (
    <div className="oneTheme">
      <h2>
        {theme && (
          <a
            className="themeLink"
            href={`/themes/${theme.id}/question/${theme.Qestions[0].id}`}
          >
            {theme.name}
          </a>
        )}
      </h2>
      {/* <img style={{width:'100%'}} src={theme.photo} alt="themephoto" /> */}
    </div>
  );
}

module.exports = Theme;
