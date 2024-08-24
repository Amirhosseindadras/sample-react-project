
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom"
const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const loc = location.pathname;

    const ToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex items-center justify-between p-4">
            <button
                className="block lg:hidden focus:outline-none"
                onClick={ToggleMenu}
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
            <nav
                className={`${isOpen ? 'block' : 'hidden'
                    } lg:flex lg:items-center lg:w-auto`}
            >
                <ul className="text-sm absolute top-[91px] right-[95px] p-4 bg-gray-200 rounded-2xl  lg:flex-grow gap-2 ">
                    <Link to={"/auth"}>
                        <li className={`hover:text-blue-500 ${loc === "/auth" && "bg-blue-500 text-white "} px-4 py-1 rounded-[8px] `}>{"حساب کاربری"}</li>
                    </Link>
                    <Link to={"/"}>
                        <li className={`hover:text-blue-500 ${loc === "/" && "bg-blue-500 text-white "} px-4 py-1 rounded-[8px] `}>{"صفحه اصلی"}</li>
                    </Link>
                    <Link to={"/products"}>
                        <li className={`hover:text-blue-500 ${loc === "/products" && "bg-blue-500 text-white "} px-4 py-1 rounded-[8px] `}>{"دوره های اموزشی "}</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )

}



export default BurgerMenu;