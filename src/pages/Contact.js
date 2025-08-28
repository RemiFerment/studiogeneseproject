import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-lg-3">
          <Navigation />
        </div>
        <div className="col-lg-9 text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className='my-5 text-uppercase fw-bold'>Formulaire de contact</h1>
          <div className="d-flex ">
            <h1>
              <i class="bi bi-cone-striped text-warning"></i>
              Cette partie du site n'est pas encore fini...
              <i class="bi bi-cone-striped text-warning"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 