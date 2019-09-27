// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../styles/Menu.module.css';

export default function Menu() {
    return (
        <div className={styles.body}>
            <h2>Setup</h2>
            <p>The youngest player is the <b className={styles.orange_text}>Start Player</b>, who begins by placing 2 <b className={styles.orange_text}>Workers</b> of their chosen color into any <b className={styles.orange_text}>Unoccupied Spaces</b> on the board. The other players then place their <b className={styles.orange_text}>Workers.</b></p>
            
            <h2>How to Play</h2>

            <p>Player take turns, starting with the <b className={styles.orange_text}>Start Player</b>, who first placed their <b className={styles.orange_text}>Workers</b>. On your turn, select one of you <b className={styles.orange_text}>Workers</b>. You must <b className={styles.purple_text}>move</b> and then <b className={styles.purple_text}>build</b> with the <b className={styles.orange_text}>selected Worker.</b></p>

            <p><b className={styles.purple_text}>Move</b> your selected <b className={styles.orange_text}>Worker</b> into one of the (up to eight neighbouring spaces).</p>
            <p>A <b className={styles.orange_text}>Worker</b> may <b className={styles.purple_text}>move up</b> a maximum of one Level higher, <b className={styles.purple_text}>move down</b> any number of Levels lower, or <b className={styles.purple_text}>move</b> along the same Level. A <b className={styles.orange_text}>Worker</b> may not move up more than one Level.</p>

            <p>The space your <b className={styles.orange_text}>Worker</b> <b className={styles.purple_text}>moves</b> into must be <b className={styles.orange_text}>unoccopied</b> (not containing a <b className={styles.orange_text}>Worker</b> or a <b className={styles.orange_text}>Tower</b>).</p>

            <p><b className={styles.purple_text}>Build</b> a <b className={styles.orange_text}>Block</b> or a <b className={styles.orange_text}>Tower</b> on a unoccupied space <b className={styles.purple_text}>neighbouring</b> the <b className={styles.orange_text}>Moved Worker</b>.</p>

            <p>You can <b className={styles.purple_text}>build</b> onto a <b className={styles.orange_text}>Level</b> of any height, but you <b><u>must</u></b> choose the correct shape of Block or Tower for the Level being built. A Tower with <b className={styles.orange_text}>3 Blocks</b> and a Tower is considered a <b className={styles.orange_text}>"Complete Tower"</b>.</p>

            <h2>Winning the Game</h2>
            <p>If one of your <b className={styles.orange_text}>Workers</b> <b className={styles.purple_text}>moves up</b> on top of <b className={styles.orange_text}>Level 3</b> durning your turn, you insantly win!</p>
        </div>
    );
}