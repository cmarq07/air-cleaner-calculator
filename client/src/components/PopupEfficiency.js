import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RecommendationsPopupGraphic from '../images/recommendations_popup_graphic.svg'

//

export function PopupEfficiency() {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  return (
    <div>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="info-modal">
          <div className="content">
          <img src={RecommendationsPopupGraphic} width="50%" height="50%"/>
          <br/>
          <h3 className="header">How did we calculate this?</h3>
          <p>We take your room volume, your air cleaner's CADR (clean air delivery rate), and an averaged outdoor ventilation number.</p>
          <p>We run it through our algorithm to <b>make sure that you're achieving a level of four air changes per hour!</b></p>
          <div className="button-container">
            <button type="button" className="button is-info" onClick={closeModal}>View Results</button>
          </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopupEfficiency;