 import axios from "axios";
 
export const api = axios.create({
    baseURL: 'http://localhost:5100'
})

export const getProduct = async(userId, query) => {
    let url = `/users/${userId}/products/`
    if(query !== '') {
        url += `?q=${query}`
        console.log('query', url)
    }

    return api.get(url)


}

export const createSession = async(email, password) => {
    return api.post(`/sessions`, {email, password})
}

export const createProduct = async(userId, infoProduct) => {
   const url =  `/users/${userId}/products/`
   const ProductName = getRepositoryName(repositoryUrl)
   return api.post(url, {name:repositoryName, url: repositoryUrl})

}

export const destroyProduct = async (userId, ProductId) => {
    const url =  api.delete(`/users/${userId}/repositories/${ProductId}`)
    return url
}


const getRepositoryName = (url) => {
 const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

 const match = url.match(regex)



 if(match[2]){
    const values = match[2].split('/')
    
    return `${values[1]}/${values[2]}`
 }
}

