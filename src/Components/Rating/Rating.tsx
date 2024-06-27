import RatingInterface from "../../Interfaces/RatingInterface"
import "./Rating.css"

function Rating({ note }: Readonly<RatingInterface>) {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <i
          key={`${index}-${note}`}
          className={`ks-rating-star fa-solid fa-star ${index < note ? 'note' : ''}`}
        ></i>
      ))}
    </div>
  );
}

export default Rating;