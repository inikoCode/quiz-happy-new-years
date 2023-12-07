const React = require('react');

function Theme({ theme }) {
  return (
    <div>
      <h2>
        <a href="#">{theme.name}</a>
      </h2>
    </div>
  );
}

module.exports = Theme;
