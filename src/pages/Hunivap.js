import React from 'react';
import Navigation from '../components/Navigation';
import LoopingVideo from '../components/LoopingVideo';

const Hunivap = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>
                <div className="col-lg-9 text-center d-flex flex-column justify-content-center align-items-center">
                    <h1 className='my-5 text-uppercase font-sg'>Hunivap</h1>
                    
                    <button
                    className="sg-btn-outline w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsHunivap"
                    aria-expanded="false"
                    aria-controls="collapsHunivap"
                    >
                    En savoir plus... <i className="bi bi-chevron-compact-down"></i>
                    </button>

                    <div className="collapse" id="collapsHunivap">
                        <div className="card card-body w-100">
                            <p className='sg-font-size sg-color-secondary p-2 lh-1'><b>Hunivap</b> est une boutique de e-cigarettes et e-liquides
                        située en plein cœur de Rouen, à deux pas de la cathédrale. Pour ce projet, l’enjeu était clair : repenser complètement
                        leur identité visuelle afin d’exprimer un univers plus moderne et brut, fidèle à leur ambiance à la fois industrielle et
                        chaleureuse.
                        <br /><br />
                        J’ai travaillé autour d’un design graphique qui mise sur des lignes audacieuses et épurées, pour affirmer une personnalité
                        forte et contemporaine.
                        <br /><br />
                        Le contraste entre un jaune clair et un rouge profond vient renforcer cette identité : il crée un dialogue visuel dynamique,
                        évoquant à la fois l’énergie de la ville et la convivialité du lieu.</p>
                        </div>
                    </div>

                    <br /><br />
                    <img src="./img/card/hunivap/card-hunivap.webp" alt="Charte Graphique Hunivap" className='img-fluid d-block w-100 my-3' />
                    <img src="./img/card/hunivap/Charte_Hunivap-03.webp" alt="Charte Graphique Hunivap" className='img-fluid d-block w-100 my-3' />
                    <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 gap-5 my-3'>
                        <LoopingVideo webmSrc="/motions/Post_Luxe_XR.webm" mp4Src="/motions/Post_Luxe_XR.mp4" poster="/motions/Post_Luxe_XR.webp" classString='w-100' />
                        <LoopingVideo webmSrc="/motions/video_collab.webm" mp4Src="/motions/video_collab.mp4" poster="/motions/video_collab.webp" classString='w-100' />
                    </div>
                    <img src="./img/card/hunivap/Charte_Hunivap-04.webp" alt="Logo Studio Génèse" className='img-fluid d-block w-100 my-3' />
                </div>
            </div>
        </div>
    );
};

export default Hunivap;