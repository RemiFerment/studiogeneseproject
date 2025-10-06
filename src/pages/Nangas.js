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
                    <p className='sg-font-size sg-color-secondary p-5 lh-1'>Pour un ami streamer dont le pseudo est <b>Nangas</b>, j’ai réalisé un
                        logo et une bannière sur mesure pour sa chaîne Twitch. Il voulait une identité visuelle dans un univers spatial, avec
                        des planètes, étoiles et vaisseaux, le tout dans un style cartoon coloré.
                        Le logo représente une planète vivante et expressive, qui semble sortir d’un dessin animé. La bannière, elle, plonge
                        directement dans un univers cosmique pop et décalé, avec des couleurs vives et des éléments fun qui reflètent parfaitement
                        l’esprit de Nangas. Un projet où j’ai pu mixer créativité, humour et science-fiction pour créer une ambiance visuelle unique
                        et reconnaissable !</p>
                    <br /><br />
                    <img src="./img/card/nangas/logo nangas.webp" alt="Logo Nangas" className='img-fluid d-block w-100 my-3' />
                    <img src="./img/card/nangas/banniere-nangas-03.webp" alt="Bannière Nangas" className='img-fluid d-block w-100 my-3' />
                    <LoopingVideo src="/motions/asset_1.mp4" poster="" className='w-100' />
                </div>
            </div>
        </div>
    );
};

export default Nangas;