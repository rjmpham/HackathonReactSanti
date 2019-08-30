import React from 'react';
import {CONTROLBUTTONS} from '../Model/ControlButtons.js'; 
import styles from "../styles/ControlPanel.module.css";

function ControlPannel(props){

    function handleClick(i){
        props.onClick(i);
    }

    return(
        <div>
            <button 
                className={styles.menuButton} 
                onClick={() => handleClick(CONTROLBUTTONS.PASS)}
            > 
                Pass
            </button>
            
            <button 
                className={styles.menuButton}
                onClick={() => handleClick(CONTROLBUTTONS.NEWGAME)}
            > 
                New Game
            </button>
        </div>
    );
    
} export default ControlPannel;
