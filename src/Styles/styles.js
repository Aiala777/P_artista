// estilo do header
export const headerStyle = {
    textAlign: 'center',
    margin: '20px 0'
 
};
  
// estilo criado para as imagens superiores da pagina (perfil)
export const imageStyle = {
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    objectFit: 'cover',  
    border: 'none'  
};

// estilo criado para as imagens superiores da pagina (logo)
export const imageStyle2 = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '200px',
    height: '200px',
    objectFit: 'contain'
    
};

// estilo criado para as imagens inferiores da pagina (logo)
export const imageStyle3 = {
    position: 'absolute',
    top: '10px',
    left: '700px',
    width: '200px',
    height: '200px',
    objectFit: 'contain'
    
};
// estilo criado para o component footer
export const footerStyle = {
    textAlign: 'center',
    margin: '30px 0',
    padding: '30px 0',
    color: '#fff',
    borderTop: '1px solid #fff',
    position: 'relative'

};

// export const sectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '20px',
//     margin: '20px 0'
// };

// estilo criado para o container onde estão as fotos

export const photoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
};

// export const buttonStyle = {
//     backgroundColor: '#8B4513',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer'
// };

// estilo para a tag h1 no component bioStyle.js
export const h1 = {
    h1: 'font-weight: bold, margin: 20px 0',
    h2: 'font-weight: bold, margin: 20px 0'
    
}

// estilo para o background da div no component Bio.js
export const backgroundColorBio = {
    backgroundColor: 'black'
}

export const section = {
    padding: '20px',
    backgroundColor: 'black',
    borderradius: '10px',
    margin: '20px 0',
    width: '80%',
    boxshadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
}

// estilo para o texto no componente Bio.js
export const bioStyle = {
    flex: '1', // Permite que o componente use o espaço disponível
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: 'black',
};

// estilo para Background do componente Bio
export const BioStyleBackgoundContainer = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    margin: '20px 0',
    width: '100vw',
    boxSizing: 'border-box',
    textAlign: 'center'
};

// estilo para a tag P no Bio.js
export const P = {
    lineHeight: '1.8'
}

// estilo para o copyrigth no footer
export const copyR = {
    fontSize: '10px',
    position: 'relative',
    padding: '20px'
}

// estilo feito para alinhar o Bio.js e o Photos.js 
export const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adiciona espaço entre os componentes
    gap: '20px', // Espaço entre os componentes
    margin: '20px', // Margem ao redor do contêiner
};