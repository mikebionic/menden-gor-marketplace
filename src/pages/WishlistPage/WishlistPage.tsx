import React, { useState, useEffect } from 'react';

import { WishlistTable } from 'common/Table';
import { wishlistService } from 'sapredux/services'
import { Spinner } from 'modules/loaders';
import { ErrorBoundary } from 'modules/errors'


export const WishlistPage: React.FC = () => {

  const [loading, set_loading] = useState(true)
  const [wishlist_items, set_wishlist_items] = useState([])
  const get_wishlist_data = async() => {
    set_loading(true)
    const wishlist_items = await wishlistService.fetchAll_data()
    wishlist_items && set_wishlist_items(wishlist_items); set_loading(false)
  }

  useEffect(() => {
    get_wishlist_data();
  }, []);

  return (
    <ErrorBoundary>
      { loading && <Spinner /> }
      { <WishlistTable data={wishlist_items} /> }
    </ErrorBoundary>
  );
};
