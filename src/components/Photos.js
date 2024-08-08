import React, { useState } from 'react';
import FotoBody from '../photos/willjorgeFotoSite1.jpeg';
import FotoBody2 from '../photos/willjorgeFotoSite2.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar o Font Awesome

const Photos = () => {
    const photos = [
        { src: FotoBody, alt: 'Foto 1', caption: 'Contrate para o seu evento.' },
        { src: FotoBody2, alt: 'Foto 2', caption: 'Show festa junina empresa Localiza.' }
    ];

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="photos-container">
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                    onClick={handlePrevPhoto}
                    style={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: '#8B4513',
                        margin: '0 20px',
                    }}
                >
                    <i className="fas fa-chevron-left"></i> {/* Ícone de seta para a esquerda */}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img 
                        src={photos[currentPhotoIndex].src} 
                        alt={photos[currentPhotoIndex].alt} 
                        style={{ width: '300px', height: '300px', borderRadius: '15px' }} 
                    />
                    <p>{photos[currentPhotoIndex].caption}</p>
                </div>
                <div
                    onClick={handleNextPhoto}
                    style={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: '#8B4513',
                        margin: '0 20px',
                    }}
                >
                    <i className="fas fa-chevron-right"></i> {/* Ícone de seta para a direita */}
                </div>
            </section>
        </div>
    );
};

export default Photos;
