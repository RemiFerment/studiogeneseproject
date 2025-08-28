import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, path, releaseYear }) => {
    return (
        <div className="col card">
            <NavLink to={`/${path}`} className="d-block">
                <img
                    src={`./img/card/${path}/card-${path}.webp`}
                    alt={`Carte ${title}`}
                    className="img-fluid d-block w-100"
                />
                <div className="infos">
                    <h5>{releaseYear}</h5>
                    <h2>{title.toUpperCase()}</h2>
                </div>
            </NavLink>
        </div>
    );
};

export default Card;
