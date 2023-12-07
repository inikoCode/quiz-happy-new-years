const React = require('react');
// const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (
    <html lang='ru'>
      <head>
        <title>{title}</title>
        {/* <script defer src='/scripts/deleteUsers.js' /> */}
        <link rel='stylesheet' href='/css/style.css' />
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;