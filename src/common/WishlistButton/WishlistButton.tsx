import React, { useState, useEffect } from 'react';

import { IconLabelButton } from 'common/IconLabelButton';
import { HeartOutlined } from '@ant-design/icons';
import { HeartFilled } from '@ant-design/icons';

interface IWishlistProps {
  wishlist?: boolean;
  margin?: string;
}

export const WishlistButton: React.FC<IWishlistProps> = ({
  wishlist = false,
  margin = 'mt-2 mb-2 mr-2',
}) => {
  const [active, setActive] = useState(wishlist);
  useEffect(() => {
    setActive(wishlist)
  }, [wishlist])

  return (
    <IconLabelButton
      className={`relative bottom-0 right-0 float-right border border-white rounded-md hover:shadow-sm bg-fullwhite h-9 w-9 ${margin}`}
      onClick={() => setActive(!active)}
      icon={
        active ? (
          <HeartFilled className="w-6 h-full mx-auto my-0 text-2xl text-red-500" />
        ) : (
          <HeartOutlined className="w-6 h-full mx-auto my-0 text-2xl text-red-500" />
        )
      }
    />
  );
};
