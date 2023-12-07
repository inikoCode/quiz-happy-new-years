const React = require('react');

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Квиз</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Главная страница
            </a>
            <a className="nav-link" href="/themes">
              Выбор темы
            </a>
            <a className="nav-link" href="/registration">
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;
