import React from 'react';

import './collection-preview.styles.scss';

import CollectionItems from '../collection-items/collection-items.component'

const CollectionPreview = ( {title , items } ) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <div className='preview'>
                {
                    items
                    .filter(( item , idx ) => idx < 4 )
                    .map(({ id , ...otherItemsProps }) => (
                        <CollectionItems key={id} { ...otherItemsProps } />
                    ))  
                }
            </div>
        </div>
    )
}

export default CollectionPreview;