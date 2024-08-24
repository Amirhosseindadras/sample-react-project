import image from "../assets/images/nextjs.jpg"
import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Product=({img,title,amount,url})=>{
return(
    <div className="  w-[330px] h-[520px] shadow-lg rounded-b-[12px] " >
<img src={img} className=" rounded-[12px] w-full h-[300px] " />

<Link to={url} >
<div className="  p-6 ">
<div className=" min-h-[115px] ">
<p> {"تکمیل شده"} </p>

<p className=" mt-4 "> {title} </p>

</div>

<div className=" flex justify-between items-center mt-8   ">

<p className=" text-cyan-400 "> {amount} </p>

<div className=" flex  items-center justify-center gap-2  text-cyan-400 ">
<p> {"مشاهده"} </p>
<VscArrowLeft className="mt-1"/>


</div>

</div>
</div>
</Link>
    </div>
)

}

export default Product 