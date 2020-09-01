import React from "react";

import './collectionItem.styles.scss'
export const CollectionItem = ({ name, imageUrl, price }) => (

  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  </div>
);
