import React from 'react';
import Navigation from '../components/Navigation';

const LaBonneFessee = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>
                <div className="col-lg-9 text-center">
                    <h1 className='my-5 text-uppercase font-sg'>La bonne fessée</h1>
                     <button
                    className="btn btn-secondary w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLBF"
                    aria-expanded="false"
                    aria-controls="collapseLBF"
                    >
                    En savoir plus...
                    </button>

                    <div className="collapse" id="collapseLBF">
                        <div className="card card-body w-100">
                    <p className='sg-font-size sg-color-secondary p-5 lh-1'>Création de l’identité visuelle d’une pizzeria La Bonne Fessée.
                        L’idée était de jouer sur le ton décalé tout en gardant une approche moderne, lisible et jamais vulgaire. Le logo
                        combine une typographie pleine de caractère avec une mise en page simple et efficace.
                        <br /><br />
                        Une palette de couleurs chaleureuse (vert olive, jaune crème, noir) apporte à la marque un look à la fois authentique
                        et moderne.
                        <br /><br />
                        J’ai aussi conçu une mascotte, une part de pizza qui incarne l’esprit de la marque avec humour, sans jamais dépasser les
                        limites du bon goût. Elle permet d’humaniser la marque et de renforcer sa personnalité, notamment sur les supports de
                        communication ou les réseaux sociaux.
                        <br /><br />
                        Ceci est un projet fictif. </p>
                        </div>
                    </div>
                    <br /><br />
                    <img src="./img/card/la-bonne-fessee/card-la-bonne-fessee.webp" alt="Logo La bonne fessée" className='img-fluid d-block w-100 my-3' />
                </div>
            </div>
        </div>
    );
};

export default LaBonneFessee;