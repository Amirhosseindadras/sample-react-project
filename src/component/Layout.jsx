import Footer from "./Footer/Footer"
import Header from "./Headers/Header"

const Layout = ({ children }) => {

    return (

        <div className="w-[80%] lg m-auto">

            <div><Header /></div>

            <main>{children}</main>

            <Footer />
            
        </div>

    )

}

export default Layout 