import React from 'react';

export const CollectionList = ({title,items})=>(
    <div>
    <h1>{title}</h1>
    {items.filter((item,index)=>index<=4).map(item=><h2>{item.name}</h2>)}
    </div>
)

export default CollectionList