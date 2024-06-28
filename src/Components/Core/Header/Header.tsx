import Menu from "../../Menu/Menu";
import Navbar from "../../Navbar/Navbar";
import "./Header.css"

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