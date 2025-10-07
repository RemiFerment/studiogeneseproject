import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>
                <div className="col-lg-9 text-center d-flex flex-column justify-content-center align-items-center">
                    <h1 className='my-5 text-uppercase font-sg'>Qui suis-je ?</h1>
                        <p className="sg-font-size sg-color-secondary p-2 lh-1">
                            Studio Genèse est né d’une envie profonde : accompagner les projets dès leur tout début, là où tout se dessine encore à l’état d’idée.
Le mot « Genèse » me parle particulièrement. Il évoque ce moment fragile et excitant où une vision prend forme, où l’on pose les premières pierres d’un univers visuel. C’est cette étape fondatrice que j’aime explorer aux côtés de mes clients.
Pour traduire cette approche, j’ai imaginé une identité graphique vivante et organique, avec des formes souples et une palette de verts doux et tons crème naturels, qui créent une atmosphère calme, sincère et ancrée dans le réel.
Derrière Studio Genèse, il y a moi : Éloïse Legendre.
                        </p>
                        <p className="sg-font-size sg-color-secondary p-2 lh-1">
J’ai étudié à l’ECV Paris, où j’ai obtenu un Master 2 en Direction Artistique 360°. Mes deux dernières années en alternance m’ont permis de plonger dans des univers très différents, d’apprendre à écouter, à comprendre les besoins réels des marques et à construire des identités qui leur ressemblent vraiment.
Aujourd’hui, je mets cette expérience au service de projets qui me tiennent à cœur : des histoires à faire naître, des identités à faire éclore, des idées à faire grandir.
                        </p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;