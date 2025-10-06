import React from 'react';
import { NavLink } from 'react-router-dom';

export const navItems = [
  { label: 'Studio Genèse', to: 'studio-genese', releaseYear: '2025' },
  { label: 'Hunivap', to: 'hunivap', releaseYear: '2025' },
  { label: 'The Noah Island', to: 'the-noah-island', releaseYear: '2025' },
  { label: 'Nangas', to: 'nangas', releaseYear: '2025' },
  { label: 'La Bonne Fessée', to: 'la-bonne-fessee', releaseYear: '2025' },
];

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex align-items-start justify-content-start w-100">
      <div className="container-fluid navigation d-flex flex-column justify-content-between align-items-center">
        {/* Logo */}
        <div className="navigation mt-4 flex-2 d-none d-xl-block">
          <div className="text-center me-5">
            <img src="./img/Logo.webp" alt="Logo Studio Genèse" width="50%" />
          </div>
        </div>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler align-self-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <br className="my-5" />

        {/* Main navigation links */}
        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
          <ul className="navbar-nav flex-column text-left justify-content-center ms-5 w-100 font-sg">

            {/* WORK section */}
            <li className="nav-item my-2">
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? 'nav-item nav-active' : 'nav-item')}
              >
                WORK
              </NavLink>

              {/* Sub-menu for projects */}
              <ul className="list-unstyled my-3 ms-3">
                {navItems.map((item) => (
                  <li key={item.to} className="my-2">
                    <NavLink
                      to={`/${item.to}`}
                      className={(nav) =>
                        nav.isActive ? 'nav-active nav-item' : 'nav-item'
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* About section */}
            <li className="nav-item my-3">
              <NavLink
                to="/about"
                className={(nav) =>
                  nav.isActive
                    ? 'nav-item nav-active text-uppercase'
                    : 'nav-item text-uppercase'
                }
              >
                à propos de moi
              </NavLink>
            </li>

            {/* Contact section */}
            <li className="nav-item my-3">
              <NavLink
                to="/contact"
                className={(nav) =>
                  nav.isActive
                    ? 'nav-item nav-active text-uppercase'
                    : 'nav-item text-uppercase'
                }
              >
                Me contacter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
