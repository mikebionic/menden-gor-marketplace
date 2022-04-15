import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Image } from 'common/Image'

export const MobileCarouselSlider = ({ images }: any) => {
	return (
		<Splide
			className={`mb-8`}
			options={{
				type: 'loop',
				gap: '1rem',
				autoplay: true,
				pauseOnHover: true,
				resetProgress: false,
				lazyLoad: true,
				speed: 700,
				arrows: false,
			}}
			hasSliderWrapper
			hasAutoplayProgress
		>
			{images.map((image: any, idx: number) => (
				<SplideSlide
					className="h-full p-[0_0_56.23%_0] grid place-content-center place-items-center"
					key={idx}
				>
					<Image
						src={image.filePathM}
						alt={image.title}
						className="absolute w-full h-auto"
					/>
				</SplideSlide>
			))}
		</Splide>
	)
}
