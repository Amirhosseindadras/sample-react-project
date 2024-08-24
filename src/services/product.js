import apiInstance from "./interceptor"

export const getProducts = async () => {
    const url = "products"
    const response = await apiInstance.get(url)
    return response.data
}