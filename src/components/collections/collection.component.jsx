import React from "react";
import { CollectionItem } from "../collection_item/collectionItem.component";

import './collection.component.scss'
export const CollectionList = ({ title, items }) => (
  <div className = 'collection-list'>
    <h1 className="title">{title}</h1>

    <div className = 'preview'>{items
      .filter((item, index) => index <= 4)
      .map(({ id, ...otherItemProps }) => (
        <CollectionItem id={id} {...otherItemProps} />
      ))}</div>
  </div>
);

export default CollectionList;
