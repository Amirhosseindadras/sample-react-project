import Navbar from "./Navbar";
import logo from "../../assets/images/frontcast-logo-top.png"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleMode } from "../../redux/slices";
import BurgerMenu from "../Burgermenu";

const Header = () => {
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.darkModeState.isDarkMode)
  const darkModeHandler = () => {
    dispatch(toggleMode())
  }
  return (

    <header className="flex justify-between items-center lg:items-start pt-12">
      <div className="lg:hidden"><BurgerMenu /></div>
      <Navbar />
      <button className={` ${isDark ? "text-black bg-blue-200 p-2 rounded-md" : "text-white bg-blue-500 p-2 rounded-md"} `} onClick={darkModeHandler}>
        {isDark ? "LightMode " : "DarkMode"}
      </button>
      <Link to={"/"} >
        <img src={logo} width={200} height={250} />
      </Link>
    </header>

  )


}

export default Header;
