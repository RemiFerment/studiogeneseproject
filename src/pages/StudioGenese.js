import React from 'react';
import Navigation from '../components/Navigation';

const StudioGenese = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>
                <div className="col-lg-9 text-center">
                    <h1 className='my-5 text-uppercase'>Studio Génèse</h1>
                    <p className='sg-font-size sg-color-secondary p-5 lh-1'><b>Studio Genèse</b> est né d'une conviction forte : chaque projet mérite une attention particulière dès ses premiers
                        instants. Le mot "Genèse" incarne ce moment précieux où tout commence, où les idées prennent forme et s’animent. C’est à
                        cette étape fondatrice que j’aime intervenir, en accompagnant mes clients dès la naissance de leur univers visuel.
                        <br /><br />
                        Pour refléter cette vision, j’ai conçu une identité typographique au design organique, souple et vivant, à l’image de
                        la créativité en mouvement. La palette de couleurs, composée de verts doux et de tons crème naturels, évoque une
                        atmosphère apaisante, authentique et ancrée dans le réel.</p>
                    <br /><br />
                    <img src="./img/card/studio-genese/card-studio-genese.webp" alt="Logo Studio Génèse" className='img-fluid d-block w-100 my-3' />
                    <img src="./img/card/studio-genese/logo genese.webp" alt="Logo Studio Génèse" className='img-fluid d-block w-100 my-3' />
                </div>
            </div>
        </div>
    );
};

export default StudioGenese;