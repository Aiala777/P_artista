import React from "react";
import FotoPerfil from '../photos/WillPerfil.png';
import Logo from '../photos/logo2.png';
import { headerStyle, imageStyle, imageStyle2 } from "../Styles/styles";

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src={Logo} alt="Logo" style={imageStyle2} />
      <img
        src={FotoPerfil}
        alt="Musico"
        style={imageStyle}
      />
      <h1>Willian Jorge</h1>
    </header>
  );
};



export default Header;
