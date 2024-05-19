import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";

function Header() {  

  return (
    <header>
      <Menu />
      <div className="ks-nav">
        <Navbar/>
      </div>
    </header>
  )
}



export default Header