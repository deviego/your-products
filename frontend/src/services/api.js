 import axios from "axios";
 
export const api = axios.create({
    baseURL: 'http://localhost:5100'
})

export const getProduct = async(userId, query) => {
    let url = `/users/${userId}/products/`
    if(query !== '') {
        url += `?q=${query}`
    }

    return api.get(url)


}

export const createSession = async(email, password) => {
    return api.post(`/sessions`, {email, password})
}


export const destroyProduct = async (userId, ProductId) => {
    const url =  api.delete(`/users/${userId}/products/${ProductId}`)
    return url
}



