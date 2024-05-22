interface ErrorProps {
  errors: string;
}

function Erreur({ errors }: Readonly<ErrorProps>) {
  return (
    <div className="ks-error">
      {Object.entries(errors).map(([key, value]) => (
        <div key={key} className="ks-error-item">
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}

export default Erreur;