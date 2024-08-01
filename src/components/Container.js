import React from 'react';
import Bio from './Bio';
import Photos from './Photos';
import { containerStyle } from '../Styles/styles';



const Container = () => {
    return (
        <div style={containerStyle}>
            <Bio />
            <Photos />
        </div>
    );
};

export default Container;