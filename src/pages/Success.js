import React from 'react';
import Navigation from '../components/Navigation';

const Success = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>
                <div className="col-lg-9 text-center d-flex flex-column justify-content-center align-items-center">
                    <h1 className='my-5 text-uppercase fw-bold'>Votre demande à bien été envoyée !</h1>
                    <div className="w-75 text-start">
                        <p>Nous vous répondrons dans les plus brefs délais.</p>
                        <p>Merci pour votre confiance !</p>
                        <a href='/' className='btn btn-success sg-bg w-25'>Retour à l'accueil</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;