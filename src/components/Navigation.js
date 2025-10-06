import React from 'react';
import { NavLink } from 'react-router-dom';


export const navItems = [
    { label: "Studio Genèse", to: "studio-genese", releaseYear: "2025" },
    { label: "Hunivap", to: "hunivap", releaseYear: "2025" },
    { label: "The Noah Island", to: "the-noah-island", releaseYear: "2025" },
    { label: "Nangas", to: "nangas", releaseYear: "2025" },
    { label: "La Bonne Fessée", to: "la-bonne-fessee", releaseYear: "2025" }
];

const Navigation = () => {
    return (

        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid navigation d-flex flex-column justify-content-between align-items-center'>
                <div className="navigation mt-4 flex-2 d-none d-xl-block">
                    <div className='text-center me-5'>
                        <img src="./img/Logo.webp" alt="" width="50%" />
                    </div>
                </div>
                <div className="navigation mb-4 ms-2 flex-2 d-block d-sm-none justify-content-between">
                    <div className='text-center'>
                        <img src="./img/Logo.webp" alt="" width="20%" />
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <br className='my-5' />
                <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column text-left justify-content-center ms-5 w-100">
                        <li>
                            <NavLink to="/" className={((nav) => (nav.isActive ? "nav-item nav-active" : "nav-item"))}>
                                WORK
                            </NavLink>
                            <div className='my-3 '>
                                {navItems.map((item, index) => (
                                    <li className='my-2'>
                                        <NavLink
                                            key={index}
                                            to={"/" + item.to}
                                            className={(nav) => (nav.isActive ? "nav-active nav-item" : "nav-item")}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </div>
                        </li>
                        <li className='my-3'>
                            <NavLink to="/about" className={((nav) => (nav.isActive ? "nav-item nav-active text-uppercase" : "nav-item  text-uppercase"))}>
                                à propos de moi
                            </NavLink>
                        </li>
                        <li className='my-3'>
                            <NavLink to="/contact" className={((nav) => (nav.isActive ? "nav-item nav-active text-uppercase" : "nav-item  text-uppercase"))}>
                                Me contacter
                            </NavLink>
                        </li>
                    </ul>
                </div >
            </div >

        </nav >
    );
};

export default Navigation;