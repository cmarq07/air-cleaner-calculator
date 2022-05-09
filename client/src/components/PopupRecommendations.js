import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RecommendationsPopupGraphic from '../images/recommendations_popup_graphic.svg'

//

export function PopupRecommendations() {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  return (
    

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="info-modal">
          <div className="content">
          <img src={RecommendationsPopupGraphic} width="50%" height="50%" alt="Recommendations popup graphic"/>
          <br/>
          <h3 className="header">Here are the air cleaners that we recommend for your space!</h3>
          <div className="button-container">
            <button type="button" className="button is-light" onClick={closeModal}>Back to form</button>
            <button type="button" className="button is-info" onClick={closeModal}>View List</button>
          </div>
          </div>
        </div>
      </Popup>
    
  );
}

export default PopupRecommendations;