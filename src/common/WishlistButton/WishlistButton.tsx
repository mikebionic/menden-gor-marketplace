import React, { useState, useEffect } from 'react';

import { wishlistService as service } from 'sapredux/services'
import { IconLabelButton } from 'common/IconLabelButton';
import { HeartOutlined } from '@ant-design/icons';
import { HeartFilled } from '@ant-design/icons';
import { showToastMessage } from 'sapredux/helpers';
import { toJsonWishlist } from 'sapredux/services/transform_data';

const post_wishlist = async (payload: any, deleteMode = false) => {
  await service.postData(payload, deleteMode)
    .then((response: any) => showToastMessage({ type: "success", message: response.message }))
}
const onSave = (id: number, active: boolean) => post_wishlist(toJsonWishlist({ id }), active)

interface IWishlistProps {
  resId?: number
  wishlist?: boolean;
  margin?: string;
}

export const WishlistButton: React.FC<IWishlistProps> = ({
  resId = 0,
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
      onClick={() => { setActive(!active); onSave(resId, active) }}
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