interface RatingProps {
  note: number;
}

function Rating({ note }: Readonly<RatingProps>) {
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