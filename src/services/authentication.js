import apiInstance from "./interceptor"

export const postLogin = async (body) => {
    const url = "auth/login"
    const response = await apiInstance.post(url,body)
    return response.data
}

export const postRegister = async (body) => {
    const url = "auth/login"
    const response = await apiInstance.post(url,body)
    return response.data
}