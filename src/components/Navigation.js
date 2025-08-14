import React from 'react';
import { NavLink } from 'react-router-dom';


export const navItems = [
    { label: "Studio Génèse", to: "studio-genese", releaseYear: "2025" },
    { label: "Hunivap", to: "hunivap", releaseYear: "2025" },
    { label: "The Noah Island", to: "the-noah-island", releaseYear: "2025" },
    { label: "Nangas", to: "nangas", releaseYear: "2025" },
    { label: "La Bonne Fessée", to: "la-bonne-fessee", releaseYear: "2025" }
];

const Navigation = () => {
    return (
        // <div className="navigation mt-4 flex-2">
        //     <div className=''>
        //         <img src="./img/Logo.webp" alt="" width="200px" />
        //     </div>
        //     <ul className=''>
        //         <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        //             <li><b>Work</b></li>
        //         </NavLink>
        //         <hr />

        //         {navItems.map((item, index) => (
        //             <NavLink
        //                 key={index}
        //                 to={"/" + item.to}
        //                 className={(nav) => (nav.isActive ? "nav-active" : "")}
        //             >
        //                 <li>{item.label}</li>
        //             </NavLink>
        //         ))}
        //         <hr />
        //         <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        //             <li>A propos de moi</li>
        //         </NavLink>
        //     </ul>
        // </div>
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid navigation d-flex flex-column'>
                <div className="navigation mt-4 flex-2 d-none d-xl-block">
                    <div className='text-center'>
                        <img src="./img/Logo.webp" alt="" width="50%" />
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <br className='my-5' />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0 text-center">
                        <NavLink to="/" className={((nav) => (nav.isActive ? "nav-item nav-active my-2" : "nav-item my-2"))}>
                            <li><b>Work</b></li>
                        </NavLink>
                        <hr className='my-3' />
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={"/" + item.to}
                                className={(nav) => (nav.isActive ? "nav-active nav-item" : "nav-item")}
                            >
                                <li>{item.label}</li>
                            </NavLink>))}
                        <hr className='my-3' />
                        <NavLink to="/about" className={((nav) => (nav.isActive ? "nav-item nav-active my-2" : "nav-item my-2"))}>
                            <li>A propos de moi</li>
                        </NavLink>
                        <NavLink to="/contact" className={((nav) => (nav.isActive ? "nav-item nav-active my-2" : "nav-item my-2"))}>
                            <li>Me contacter</li>
                        </NavLink>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navigation;