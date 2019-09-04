// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../styles/Menu.module.css';

export default function Menu() {
    return (
        <div className={styles.body}>
            <h2>Setup</h2>
            <p>The youngest player is the <b className={styles.orange_text}>Start Player</b>, who begins by placing 2 <b className={styles.orange_text}>Workers</b> of their chosen color into any <b className={styles.orange_text}>unoccupied spaces</b> on the board. The other players then place their <b className={styles.orange_text}>workers.</b></p>
            
            <h2>How to Play</h2>

            <p>Player take turns, starting with the <b className={styles.orange_text}>Start Player</b>, who first placed their <b className={styles.orange_text}>workers</b>. On your turn, select one of you <b className={styles.orange_text}>Workers</b>. You must <b className={styles.purple_text}>move</b> and then <b className={styles.purple_text}>build</b> with the <b className={styles.orange_text}>selected Worker.</b></p>

            <p><b className={styles.purple_text}>Move</b> your selected <b className={styles.orange_text}>worker</b> into one of the (up to eight neighbouring spaces).</p>
            <p>A <b className={styles.orange_text}>Worker</b> may <b className={styles.purple_text}>move up</b> a maximum of one level higher, <b className={styles.purple_text}>move down</b> any number of levels lower, or <b className={styles.purple_text}>move</b> along the same level. A <b className={styles.orange_text}>Worker</b> may not move up more than one level.</p>

            <p>The space your <b className={styles.orange_text}>Worker</b> <b className={styles.purple_text}>moves</b> into must be <b className={styles.orange_text}>unoccopied</b> (not containing a <b className={styles.orange_text}>Worker</b> or a <b className={styles.orange_text}>Dome</b>).</p>

            <p><b className={styles.purple_text}>Build</b> a <b className={styles.orange_text}>block</b> or a <b className={styles.orange_text}>dome</b> on a unoccupied space <b className={styles.purple_text}>neighbouring</b> the <b className={styles.orange_text}>moved worker</b>.</p>

            <p>You can <b className={styles.purple_text}>build</b> onto a <b className={styles.orange_text}>level</b> of any height, but you <b><u>must</u></b> choose the correct shape of block or dome for the level being built. A tower with <b className={styles.orange_text}>3 blocks</b> and a dome is considered a <b className={styles.orange_text}>"Complete Tower"</b>.</p>

            <h2>Winning the Game</h2>
            <p>If one of your <b className={styles.orange_text}>Workers</b> <b className={styles.purple_text}>moves up</b> on top of <b className={styles.orange_text}>level 3</b> durning your turn, you insantly win!</p>
        </div>
    );
}