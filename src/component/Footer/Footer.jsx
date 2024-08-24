import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

    return (

        <div className=" h-[80%] mt-20 border-t-2 ">

            <div className="  mt-10 ">

                <ul className=" flex items-center text-bold gap-10  ">

                    <li>{"درباره ما"}</li>
                    <li>{"تماس با ما"}</li>
                    <li>{"شرایط استفاده"}</li>
                    <li>{"وبلاگ"}</li>
                    <li>{"سبد خرید"}</li>
                    <li>{"کانال تلگرام"}</li>

                </ul>


            </div>

            <div className="mt-10">

                <ul className=" flex items-center gap-2 " >

                    <li>{"شبکه‌های اجتماعی :"}</li>
                    <li><FaTwitter /></li>
                    <li><FaInstagram /></li>
                    <li><FaTelegram /></li>
                    <li><FaYoutube /></li>
                    <li><FaLinkedin /></li>

                </ul>


            </div>

            <div className="mt-10 pb-20 ">

                <p>تمامی حقوق برای فرانت‌کست محفوظ است.</p>

            </div>

        </div>
    )


}

export default Footer