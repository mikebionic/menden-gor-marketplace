import { Image } from 'common/Image';

const CircleBrands = ({ icon, name }: any) => (
  <div className="flex flex-col items-center m-auto w-[115px] banner-container">
    <Image
      className="object-contain w-16 h-16 border border-solid border-[#e6e6e6] dark:border-darkText rounded-[50%] transition_animation"
      src={icon}
      alt={name}
    />
    <span className="mt-2 text-sm text-center text-black dark:text-darkTextWhiteColor transition_animation">
      {name}
    </span>
  </div>
);

export default CircleBrands;
