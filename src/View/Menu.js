// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../styles/Menu.module.css';

export default function Menu() {
    return (
        <div className={styles.body}>
            <h2>Setup</h2>
            <p>The youngest player is the <b className={styles.orange_text}>Start Player</b>, who begins by placing 2  <b className={styles.orange_text}>🐺</b> tokens into any <b className={styles.orange_text}>Unoccupied Spaces</b> on the board. The other players then place their 2 <b className={styles.orange_text}>🐻</b> tokens. </p>
            
            <h2>How to Play</h2>

            <p>Player take turns, starting with the <b className={styles.orange_text}>Start Player</b>, who first placed <b className={styles.orange_text}>🐺</b>. On your turn, select one of you <b className={styles.orange_text}>🐺 </b> or <b className={styles.orange_text}>🐻</b> tokens. You can then <b className={styles.purple_text}>move</b> and then <b className={styles.purple_text}>build</b> with the <b className={styles.orange_text}>selected 🐺 or 🐻</b>. You may also <b className={styles.purple_text}>Pass</b> your turn.</p>
  
            <p>A <b className={styles.purple_text}>Move</b> action allows your <b className={styles.orange_text}>selected 🐺 or 🐻</b> to go into one of the (up to) eight neighbouring spaces.</p>
            <p>A <b className={styles.purple_text}>Build</b> action on a square will start a castle, that square will become one level higher per castle part. You can select one of the (up to) eight neighbouring spaces to <b className={styles.purple_text}>Build</b> on. The max level has three towers, and cannot be <b className={styles.purple_text}>Built</b> on, or <b className={styles.purple_text}>Moved</b> onto. </p>
            <p>You can <b className={styles.purple_text}>build</b> onto a square with any level</p>
            <p>A <b className={styles.orange_text}>selected 🐺 or 🐻</b> may <b className={styles.purple_text}>move up</b> a maximum of one Level higher, <b className={styles.purple_text}>move down</b> any number of Levels lower, or <b className={styles.purple_text}>move</b> along the same Level.</p>

            <p>The space your <b className={styles.orange_text}>selected 🐺 or 🐻</b> <b className={styles.purple_text}>moves</b> into must be <b className={styles.orange_text}>unoccopied</b> (not containing a <b className={styles.orange_text}>selected 🐺 or 🐻</b> or a <b className={styles.orange_text}>Tower</b>).</p>

            <h2>Winning the Game</h2>
            <p>If one of your <b className={styles.orange_text}>selected 🐺 or 🐻</b> <b className={styles.purple_text}>moves up</b> on top of <b className={styles.orange_text}>Level 3</b> durning your turn, you insantly win!</p>
        </div>
    );
}