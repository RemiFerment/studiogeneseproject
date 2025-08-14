import React from 'react';
import Navigation, { navItems } from '../components/Navigation';
import Card from '../components/Card';

const Home = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>

                <div className="col-lg">
                    <div className="row row-cols-2 g-0 justify-content-center">
                        {navItems.map((item, index) => (
                            <Card key={index} title={item.label} path={item.to} releaseYear={item.releaseYear} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
