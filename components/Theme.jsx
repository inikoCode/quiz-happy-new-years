const React = require('react');

function Theme({ theme }) {
  return (
    <div>
      <h2>
        <a href="#">{theme.title}</a>
      </h2>
    </div>
  );
}

module.exports = Theme;
