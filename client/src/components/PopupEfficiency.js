import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ResultsPopupGraphic from '../images/results_popup_graphic.svg'

//

export function PopupEfficiency() {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  return (
    

      <Popup className="modal" open={open} closeOnDocumentClick onClose={closeModal}>
            <img src={ResultsPopupGraphic} width="50%" height="50%" alt="Results popup graphic" />
            <br/>
            <h1 className="title is-4">How did we calculate this?</h1>
            <p>We take the size of your room, and the strength of your air cleaner, then run it through our algorithm to <b>make sure that you're achieving a level of four air changes per hour!</b></p>
            <div className="button-container">
              <button type="button" className="button is-info" onClick={closeModal}>View Results</button>
            </div>
      </Popup>
    
  );
}

export default PopupEfficiency;