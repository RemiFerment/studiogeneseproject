import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import StudioGenese from './pages/StudioGenese';
import Hunivap from './pages/Hunivap';
import Nangas from './pages/Nangas';
import TheNoahIsland from './pages/TheNoahIsland';
import LaBonneFessee from './pages/LaBonneFessee';
import Contact from './pages/Contact';
import Success from './pages/success';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio-genese" element={<StudioGenese />} />
        <Route path="/hunivap" element={<Hunivap />} />
        <Route path="/nangas" element={<Nangas />} />
        <Route path="/the-noah-island" element={<TheNoahIsland />} />
        <Route path="/la-bonne-fessee" element={<LaBonneFessee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        {/* path=* => Renvoie sur la page 404 not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;