import { useState } from "react"
import fleche from '../../assets/flecheCaroussel.svg'


interface CarousselProps {
  images: string[];
}

function Caroussel({ images }: Readonly<CarousselProps>) {
	const [current, setCurrent] = useState(0)
	const length = images.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	if (!Array.isArray(images) || length <= 0) {
		return null
	}

	return (
		<div className="caroussel">
			{length > 1 && (
				<img
				src={fleche}
				className="flechePrecedente"
				onClick={(e) => {
					e.preventDefault();
					previousSlide();
				}}
				alt="Flèche précédente"
			/>
			)}
			{length > 1 && (
				<img
					src={fleche}
					className="flecheSuivante"
					onClick={nextSlide}
					alt="Fléche suivante"
				/>
			)}
			{images.map((slider, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={`${slider}-${index}`}
					>
						{index === current && (
							<img
								src={slider}
								alt={'slide ' + (index + 1)}
								className="image"
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Caroussel