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
    <div className="relative group">
      <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
        <Image src={icon} alt={name} className="w-6 h-6 pl-1" />
        <h4 className="ml-4 text-left text-[#5B5B5B]">{name}</h4>
        <MdOutlineKeyboardArrowRight className="mr-2" />
      </button>
      <div className="absolute opacity-0 z-[999] top-0 w-[10rem] h-[10rem] left-[100%] min-w-[200px] bg-fullwhite rounded-lg transition_animation shadow-defaultShadow group-hover:py-1 group-hover:opacity-100 group-hover:visible invisible"></div>
    </div>
  );
};
