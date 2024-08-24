import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { postRegister } from "../services/authentication";

function Register() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const registerHandler = async (event) => {
        event.preventDefault()
        try {
            await postRegister({
                username: userName,
                password: password
            })
            navigate("/")
        } catch (error) {
            alert(error.message)

        }

    }

    return (

        <div>
            <h2 className="text-2xl font-bold text-center" >{"Register"}</h2>
            <form onSubmit={registerHandler} className="space-y-6">
                <div>
                    <label htmlFor="email" className=" block text-sm font-medium text-gray-700  text-left">{"User Name"}</label>
                    <input onChange={(event) => setUserName(event.target.value)} type="text" id="userName" className=" w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  " />
                </div>
                <div>
                    <label htmlFor="password" className=" block text-sm font-medium text-gray-700 text-left">{"Password"}</label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" id="password" className=" w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                </div>
                <div>
                    <button type="submit" className=" w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " >
                        {"Register"}
                    </button>
                </div>
            </form>
        </div>

    )

}

export default Register;