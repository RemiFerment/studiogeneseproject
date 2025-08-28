import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>

                <div className="col-lg-3 justify-content-center align-items-centerc text-center">
                    <h1 className="sg-color">404</h1>
                    <h1>Page non trouvée o_O</h1>
                    <p>Oops, il semblerait que ce lien n'existe plus... :(</p>
                    <div>
                        <NavLink to="/">
                            <p className="btn btn-success sg-bg">Page d'accueil</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default NotFound;