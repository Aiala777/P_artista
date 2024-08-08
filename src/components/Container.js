import React from 'react';
import Bio from './Bio';
import Photos from './Photos';
import { containerStyle } from '../Styles/styles';

const Container = () => {
    return (
        <div style={containerStyle} className="container">
            <Bio />
            <br/>
            <Photos />
        </div>
    );
};

export default Container;
