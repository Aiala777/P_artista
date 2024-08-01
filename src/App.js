import React from 'react';
import Header from './components/Header';
// import Bio from './components/Bio';
// import Photos from './components/Photos';
import Footer from './components/Footer';
import './App.css';
import Container from './components/Container';



function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
            <Container/>
            </div>
            <br/>
            <br/>
            
            <Footer />
        </div>
    );
}

export default App;
