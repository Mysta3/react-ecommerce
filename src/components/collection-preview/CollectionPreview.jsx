import React from 'react';
import './collection-preview.scss';

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1> {/*keep titles uppercase*/}
      <div className="preview">
        {items
          .filter((item, index) => index < 4) //return only 4 items
          .map(item => ( //display items on page
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
