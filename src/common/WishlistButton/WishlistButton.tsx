import { IconLabelButton } from 'common/IconLabelButton';
import React, { useState } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { HeartFilled } from '@ant-design/icons';

interface IWishlistProps {
  wishlist?: boolean;
}

export const WishlistButton: React.FC<IWishlistProps> = ({ wishlist }) => {
  const [active, setActive] = useState(wishlist);

  return (
    <IconLabelButton
      className="relative bottom-0 right-0 float-right mt-2 mb-2 mr-2 bg-white border border-white rounded-md shadow-sm h-9 w-9 "
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
