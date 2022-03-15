import { Image } from 'common/Image';

const CircleBrands = ({ icon, name }: any) => (
  <div className="flex flex-col items-center m-auto w-brands banner-container">
    <Image
      className="w-16 h-16 border border-solid border-borderBrands rounded-semifull transition_animation"
      src={icon}
      alt={name}
    />
    <span className="mt-2 text-sm text-center text-black transition_animation">
      {name}
    </span>
  </div>
);

export default CircleBrands