const React = require('react');

function Theme({ theme }) {
  return (
    <div className>
      <h2>
        <a href="#">{theme.name}</a>
      </h2>
      <img style={{width:'100%'}} src={theme.photo} alt="themephoto" />
    </div>
  );
}

module.exports = Theme;
