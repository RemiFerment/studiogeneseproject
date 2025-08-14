import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, path }) => {
    return (
        <div className="col">
            <NavLink to={`/${path}`} className="d-block">
                <img
                    src={`./img/card/${path}/card-${path}.jpg`}
                    alt={`Carte ${title}`}
                    className="img-fluid d-block w-100"
                />
            </NavLink>
        </div>
    );
};

export default Card;
