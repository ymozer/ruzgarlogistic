
import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
    return (

        <div className="App">
            <Navbar />
            <Hero />
            <HomePage />
            <Services />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
