import React from "react";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.html}>
      <h2>Setup</h2>
      <p>The youngest player is the <b>Start Player</b>, who begins by placing 2 <b>Workers</b> of their chosen color into any unoccupied spaces on the board. The Other players then place their workers.</p>
      
      <h2>How to Play</h2>
      <p>Player take turns, starting with the <b>Start Player</b>, who first placed their <b>workers</b>. On your turn, select one of you <b>Workers</b>. You must <b>move</b> and then <b>build</b> with the <b>selected Worker.</b></p>
      <p><b>Move</b> your selected worker into one of up (eight neighbouring spaces).</p>
      <p>A <b>Worker</b> may <b>move up</b> a maximum of one level higher, <b>move down</b> any nuber of levels lower, or <b>move</b> along the same level. A <b>Worker</b> may not move up more than one level</p>
      <p>The space your <b>Worker moves</b> into must be <b>unoccopied</b> (not containing a <b>Worker</b> or a <b>Dome</b>).</p>

      <p><b>Build</b> a <b>block</b> or a <b>dome</b> on a unoccupied space <b>neighbouring</b> the <b>moved worker</b>.</p>

      <p>You can <b>build</b> onto a <b>level</b> of any height, but you <b><u>must</u></b> choose the correct shape of block or dome for the level being built. A tower with <b>3 blocks</b> and a dome is considered a <b>"Complete Tower"</b>.</p>
    </div>
  )
}