import Layout from "../component/Layout";

import Header from "../component/Headers/Header";


import {useEffect, useState} from "react"
import axios from "axios";
import Prooduct from "../component/Prooduct";


const Product =()=> {

const [productList,setproductList] = useState([])   

useEffect( ()=>{

axios.get('https://fakestoreapi.com/products') 

. then((res)=>{
    setproductList(res.data)

}).catch((err)=>{

})

},[])


return(
<div>
    <Layout>
  <div className="">

 

  <h1 className=" mt-12 font-bold text-[32px] ">{"مشاهده دوره"}</h1>

  <div className=" flex flex-wrap justify-center items-center gap-10 mt-16 ">
  {productList.map((item,index)=> (
<Prooduct key={item.id} url={`/products-item/${item.id}`} img={item.image} amount={item.price} title={item.title} />

 ))}


  </div>

  </div>
    </Layout>
    </div>
)

}

export default Product ;