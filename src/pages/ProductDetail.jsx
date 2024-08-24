import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../component/Layout";
import { getProducts } from "../services/product";

const ProductDetail = () => {
    const [productList, setproductList] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    const getPrpdoctList = async () => {

        try {

            const response = await getProducts()
            setproductList(response)
            setLoading(false)

        } catch (error) {

            console.log(error)
            setLoading(false)

        }
    }
    useEffect(() => {

        getPrpdoctList()

    }, [])
    const product = productList.find((item, index) => item.id === parseInt(params.id))
    return (
        <Layout>
            {loading ? <p>{"loading"}</p> : product && (
                <div className=" flex  justify-center items-center gap-20 mt-8" >
                    <div className=" flex flex-col justify-center items-center gap-10 h-[600px]">
                        <h1 className="">{`title: ${product.title}`}</h1>
                        <p>{`price: ${product.price} `}</p>
                    </div>
                    <img src={product.image} className="w-[200px]" />
                </div>
            )}

        </Layout>
    )
}

export default ProductDetail;