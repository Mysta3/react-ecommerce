import React, { Component } from 'react';
import ShopData from './shopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
      const {collections} = this.state;
    return (<div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>);
  }
}

export default ShopPage;
