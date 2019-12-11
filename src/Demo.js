/* eslint-disable no-unused-vars */

import React from 'react';
import './Demo.css';
import Game from './View/Game.js';
import Menu from './View/Menu';

function Demo(){
    return(
        <div className="container">
            <div className="inner_content">
                <Game />
                <Menu />
            </div>
        </div>

    );
}

export default Demo;