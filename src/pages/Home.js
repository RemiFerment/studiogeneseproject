import React from 'react';
import Navigation, { navItems } from '../components/Navigation';
import Card from '../components/Card';

const Home = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <Navigation />
                </div>

                <div className="col-lg-9 my-5">
                    <div className="row row-cols-lg-2 g-0 justify-content-center row-cols-1">
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
