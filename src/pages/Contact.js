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
          <div className="w-75 text-start">
            <form name="contact" method="post" className='d-flex flex-column gap-2' data-netlify="true">
              <label className='mt-3'>Votre nom: </label>
              <input type="text" name="name" />
              <label className='mt-3'>Email: </label>
              <input type="email" name="email" />
              <label className='mt-3'>Message:</label>
              <textarea name="message" rows="8"></textarea>
              <button type="submit" className='btn btn-success sg-bg w-25'>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 