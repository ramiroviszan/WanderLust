import React from 'react';

const PlacesToVisitFooter = ( {selectedId, onClickUp, onClickDown} ) => (
  <div className="ToVisitFooter">
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickUp(selectedId) }>Subir</button>
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickDown(selectedId) }>Bajar</button>
    <button className="ToVisitFooterItem" type="button">Borrar</button>
  </div>
);

export default PlacesToVisitFooter;
