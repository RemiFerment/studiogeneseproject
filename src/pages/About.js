import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>

                <div className="col-lg">
                    <h1>A propos de moi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae repellat laborum repellendus, perspiciatis harum ab reprehenderit
                        iure ut, magnam consequuntur libero ratione ea rem debitis est. Sunt nisi placeat vel accusamus totam provident voluptas deleniti
                        reprehenderit accusantium. Quis, ipsa?</p>
                    <br /><br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae repellat laborum repellendus, perspiciatis harum ab reprehenderit
                        iure ut, magnam consequuntur libero ratione ea rem debitis est. Sunt nisi placeat vel accusamus totam provident voluptas deleniti
                        reprehenderit accusantium. Quis, ipsa?</p>

                </div>
            </div>
        </div>
    );
};

export default About;