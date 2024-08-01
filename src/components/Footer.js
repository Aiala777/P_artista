import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram,FaRegCopyright,FaWhatsapp } from 'react-icons/fa';
import { copyR, footerStyle, imageStyle3 } from '../Styles/styles';
import Logo from '../photos/logo2.png';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Siga-me nas redes sociais:</p>
            <div>
                <a href="https://www.facebook.com/share/Hum8eD3ZhXsDUX9b/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/willianjorgeoficial?igsh=MXFkMjMwdTR3cHgwYw==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://wa.me/5531994474381?text=Ol%C3%A1%2C%20quero%20agendar%20um%20evento." target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={30} />
                </a>
            </div>
            <div style={{ marginTop: '20px' }}>
                <p>E-mail Comercial:</p>
                <br/>
                <a href="mailto:wjradudu@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={30} />
                </a>
                <br/>
                <br/>
            </div>
            <div style={copyR}>
                <p>Developer By: Arthur Aiala</p>
                <p>Todos os direitos reservados</p>
                <a href= "a" target="_blank" rel="noopener noreferrer">
                    <FaRegCopyright size={30} />
                </a>
                <img src={Logo} alt="Logo Footer" style={imageStyle3} />
            </div>
        </footer>
    );
};


export default Footer;
