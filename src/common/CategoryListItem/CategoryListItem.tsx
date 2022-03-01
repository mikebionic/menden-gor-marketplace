import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Image } from 'common/Image';

interface ICategoryListItem {
  name: string;
  icon: string;
  image?: string;
  className?: string;
}

export const CategoryListItem: React.FC<ICategoryListItem> = ({
  name,
  icon,
}) => {
  return (
    <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
      <Image src={icon} alt={name} className="w-6 h-6 pl-1" />
      <h4 className="ml-4 text-left text-textColorParagraph">{name}</h4>
      <MdOutlineKeyboardArrowRight className="mr-2" />
    </button>
  );
};
