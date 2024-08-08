import React from 'react';
import { bioStyle, P } from '../Styles/styles';

const Bio = () => {
    return (
        <div style={{ ...bioStyle, width: '80%', padding: '10px', boxSizing: 'border-box', textAlign: 'center' }}>
            <h2>Sobre Willian Jorge</h2>
            <p style={P}>
                Willian Jorge é um talentoso músico brasileiro com um repertório diversificado que abrange diversos estilos musicais.<br />
                Sua versatilidade e paixão pela música o permitem interpretar com maestria gêneros como MPB, sertanejo, pagode e rock nacional.<br />
                Com uma voz marcante e uma presença de palco cativante, Willian encanta o público em cada apresentação, trazendo emoções e memórias através de suas performances.
            </p>
        </div>
    );
};

export default Bio;
