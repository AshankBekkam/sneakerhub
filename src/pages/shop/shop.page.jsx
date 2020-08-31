import React from 'react';
import SHOP_DATA from '../../utils/shopdata.utils.js'
import   CollectionList from '../../components/collections/collection.component.jsx';

class ShopPage extends React.Component{

    constructor()
    {
        super()
        this.state = {
            collections : SHOP_DATA,
        }
    }

    render()
    {
        
        return(
            this.state.collections.map(({id, ...otherCollectionProps} )=>
                (<CollectionList id = {id} {...otherCollectionProps} />)
            
            )
        );
    }

}

export default ShopPage