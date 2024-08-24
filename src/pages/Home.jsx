import Layout from "../component/Layout";
import Siteinfo from "../component/Siteinfo";
import { useEffect, useState } from "react"
import Prooduct from "../component/Prooduct";
import { getProducts } from "../services/product";

const Home = () => {

  const [productList, setproductList] = useState([])

  const getPrpdoctList = async () => {

    try {

      const response = await getProducts()
      setproductList(response)

    } catch (error) {
      alert(error.message)
      console.log(error)
    }
  }

  useEffect(() => {

    getPrpdoctList()

  }, [])

  return (
    <Layout>
      <div>
        <Siteinfo />
        <h1 className=" mt-12 font-bold text-[32px] ">{"مشاهده دوره"}</h1>
        <div className=" flex flex-wrap justify-center items-center gap-10 mt-16 ">
          {productList.map((item, index) => (
            <Prooduct key={item.id} url={`products-item/${item.id}`} img={item.image} amount={item.price} title={item.title} />
          ))}
        </div>
      </div>
    </Layout>
  )

}

export default Home;