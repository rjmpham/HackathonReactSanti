/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './View/Game.js';
import Menu from './View/Menu';

ReactDOM.render(
    <div className="container">
        <div className="inner_content">
            <Game />
            <Menu />
        </div>
    </div>,
    document.getElementById('root')
);