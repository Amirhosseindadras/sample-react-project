import Layout from "../component/Layout";
import { useState } from "react"
import Login from "../component/Login";
import Register from "../component/Register";

function Auth() {

    const [auth, setAuth] = useState("login")

    return (
        <Layout>
            <div className="flex item-center justify-center min-h-screen bg-gray-100 mt-12" >
                <div className=" w-full h-[400px] max-w-md p-8 space-y-8 bg-white shadow-md rounded-md mt-20 ">
                    {auth === "login" ?
                        <Login /> : <Register />
                    }
                    <div className="flex justify-center items-center">
                        <p className=" cursor-pointer " onClick={auth === "login" ? () => setAuth("register") : () => setAuth("login")} >{`${auth === "login" ? "register " : "login"} `}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Auth;