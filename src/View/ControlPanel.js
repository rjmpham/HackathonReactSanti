import React from 'react';

function ControlPannel(){
    let controlJSX = this.generateBoard();
    return(
          <div>
            {controlJSX}
          </div>
    )
    
} export default ControlPannel;