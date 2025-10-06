import React from 'react';
import Navigation from '../components/Navigation';

const TheNoahIsland = () => {
  // Array of image pairs for cleaner mapping
  const imagePairs = [
    ['The Noa island-02.webp', 'The Noa island-03.webp'],
    ['The Noa island-04.webp', 'The Noa island-05.webp'],
    ['The Noa island-06.webp', 'The Noa island-07.webp'],
    ['The Noa island-08.webp', 'The Noa island-09.webp'],
    ['The Noa island-10.webp', 'The Noa island-11.webp'],
    ['The Noa island-12.webp', 'The Noa island-13.webp'],
    ['The Noa island-14.webp', 'The Noa island-15.webp'],
    ['The Noa island-16.webp', 'The Noa island-17.webp'],
    ['The Noa island-18.webp', 'The Noa island-19.webp'],
  ];

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-lg-3">
          <Navigation />
        </div>

        <div className="col-lg-9 text-center">
          <h1 className="my-5 text-uppercase font-sg">The Noah Island</h1>

          <button
            className="btn btn-secondary w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTNI"
            aria-expanded="false"
            aria-controls="collapseTNI"
          >
            En savoir plus...
          </button>

          <div className="collapse" id="collapseTNI">
            <div className="card card-body w-100">
              <p className="sg-font-size sg-color-secondary p-5 lh-1">
                <strong>The Noah Island</strong>, située au cœur de l’océan Pacifique, est une île unique en son genre,
                née d’une réflexion sur le thème du manque. Pour combler le manque de communication entre les maîtres et
                leurs animaux (responsable de 78 % des conflits), nous avons imaginé un lieu entouré d’un dôme diffusant
                un gaz spécial, permettant aux animaux de parler la langue de leurs maîtres.
                <br />
                <br />
                Projet réalisé dans le cadre d’un workshop à l’ECV Paris autour du manque.
                <br />
                <br />
                En équipe, nous avons créé toute l’identité visuelle de Noah Island, des affiches et du logo pour se faire
                connaître, jusqu’à la signalétique et les activités à l’intérieur de l’île, offrant une expérience inédite
                où la communication est au cœur de la relation maître-animal.
                <br />
                <br />
                <br />
                <br />
                Ceci est un projet fictif.
              </p>
            </div>
          </div>

          <br />
          <br />

          <img
            src="./img/card/the-noah-island/card-the-noah-island.webp"
            alt="Charte Graphique The Noah Island"
            className="img-fluid d-block w-100 my-3"
          />

          <img
            src="./img/card/the-noah-island/The Noa island-01.webp"
            alt="Charte Graphique The Noah Island"
            className="img-fluid d-block w-100 my-3"
          />

          {imagePairs.map((pair, index) => (
            <div className="row my-3" key={index}>
              {pair.map((img, i) => (
                <div className="col-12 col-xl-6 mb-3 mb-xl-0" key={i}>
                  <img
                    src={`./img/card/the-noah-island/${img}`}
                    alt="Charte Graphique The Noah Island"
                    className="img-fluid w-100"
                  />
                </div>
              ))}
            </div>
          ))}

          <img
            src="./img/card/the-noah-island/The Noa island-20.webp"
            alt="Charte Graphique The Noah Island"
            className="img-fluid d-block w-100 my-3"
          />
        </div>
      </div>
    </div>
  );
};

export default TheNoahIsland;
