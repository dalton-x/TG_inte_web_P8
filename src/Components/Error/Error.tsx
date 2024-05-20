function Erreur(errors :Object) {

  console.log(errors);
  
  return(
    <div className='ks-error'>{errors.errors}</div>
  )
}

export default Erreur