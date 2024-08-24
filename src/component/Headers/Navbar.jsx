import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();
    const loc = location.pathname;
    return (
        <nav className="hidden lg:block" >
            <ul className="flex items-center gap-3">
                <Link to={"/auth"}>
                    <li className={`hover:text-blue-500 ${loc === "/auth" && "bg-blue-500 text-white "} px-4 py-1 rounded-[8px] `}>{"حساب کاربری"}</li>
                </Link>
                <Link to={"/"}>
                    <li className={`hover:text-blue-500 ${loc === "/" && "bg-blue-500 text-white "} px-4 py-1 rounded-[8px] `}>{"صفحه اصلی"}</li>
                </Link>
                <Link to={"/products"}>
                    <li className={`hover:text-blue-500 ${loc === "/products" && "bg-blue-500 text-white "} px-4 py-1 rounded-[8px] `}>{"دوره های اموزشی"}</li>
                </Link>
            </ul>
        </nav>

    )

}

export default Navbar;