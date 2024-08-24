import { VscAccount } from "react-icons/vsc";
import img from "../assets/images/masood.jpg"
import { Link } from "react-router-dom";


const Siteinfo = ()=>{

return(
    <div className="w-full flex flex-col mt-12 md:flex-row justify-between    "> 

       <div>
        
<h1 className="text-3xl font-bold mt-6 ">{" برنامه نویسی به زبان ساده "}</h1> 

<p className="mt-20 ">در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید </p>

<p className="mt-5">و به یک توسعه‌دهنده حرفه‌ای تبدیل شوید.</p>

<Link to={"/Product"}>
    {" "}

    <button className="font-bold bg-cyan-600 text-white mt-10 py-2 px-4 rounded-xl ">{"شروع یادگیری"}</button>

</Link>

<div className="grid grid-cols-2 md:grid-cols-3  mt-8 w-full gap-8 ">
<p className="flex gap-2 font-bold "> <VscAccount/> یادگیری با انجام تمارین </p>
<p className="flex gap-2 font-bold " > <VscAccount/> 
ویدیوهای کوتاه و با کیفیت </p>


<p className="flex gap-2 font-bold "> <VscAccount/> ضمانت بازگشت وجه  </p>
<p className="flex gap-2 font-bold "> <VscAccount/> 
به روز رسانی رایگان </p>


<p className="flex gap-2 font-bold "> <VscAccount/> سرفصل‌های جامع و دقیق </p>
<p className="flex gap-2 font-bold "> <VscAccount/> پشتیبانی دوره‌ها </p>

</div>




        </div> 
        
        <img src={img} className="rounded-3xl mt-8 md:mt-0" />
         </div>
)

}

export default Siteinfo