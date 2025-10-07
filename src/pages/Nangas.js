import React from 'react';
import Navigation from '../components/Navigation';
import LoopingVideo from '../components/LoopingVideo';

const Nangas = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>
                <div className="col-lg-9 text-center">
                    <h1 className='my-5 text-uppercase font-sg'>Nangas</h1>
<button
                    className="sg-btn-outline w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNangas"
                    aria-expanded="false"
                    aria-controls="collapseNangas"
                    >
                    En savoir plus... <i className="bi bi-chevron-compact-down"></i>
                    </button>

                    <div className="collapse" id="collapseNangas">
                        <div className="card card-body w-100">
                    <p className='sg-font-size sg-color-secondary p-2 lh-1'>Pour un ami streamer dont le pseudo est <b>Nangas</b>, j’ai réalisé un
                        logo et une bannière sur mesure pour sa chaîne Twitch. Il voulait une identité visuelle dans un univers spatial, avec
                        des planètes, étoiles et vaisseaux, le tout dans un style cartoon coloré.
                        Le logo représente une planète vivante et expressive, qui semble sortir d’un dessin animé. La bannière, elle, plonge
                        directement dans un univers cosmique pop et décalé, avec des couleurs vives et des éléments fun qui reflètent parfaitement
                        l’esprit de Nangas. Un projet où j’ai pu mixer créativité, humour et science-fiction pour créer une ambiance visuelle unique
                        et reconnaissable !</p>
                        </div>
                    </div>
                    <br /><br />
                    <img src="./img/card/nangas/logo nangas.webp" alt="Logo Nangas" className='img-fluid d-block w-100 my-3' />
                    <img src="./img/card/nangas/banniere-nangas-03.webp" alt="Bannière Nangas" className='img-fluid d-block w-100 my-3' />
                    <LoopingVideo webmSrc="/motions/asset_1.webm" mp4Src="/motions/asset_1.mp4" poster="/motions/asset_1.webp" classString='w-100' />
                </div>
            </div>
        </div>
    );
};

export default Nangas;