import { useState } from "react"
import fleche from '../../static/assets/flecheCaroussel.svg'
import CarousselInterface from "../../Interfaces/CarousselInterface.tsx"

function Caroussel({ images }: Readonly<CarousselInterface>) {
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