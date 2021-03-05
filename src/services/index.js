import axios from 'axios'

const api = axios.create({ baseURL:'https://comicvine.gamespot.com/api' })

export const endpoints = {
    comics:({
        key = "65f8af943b45445ad1fb77bcbad38a34da6aad14",
        sort ="date_added:desc",
        limit =4
    })=>{
        return `/issues/?api_key=${key}&format=json&sort=${sort}&limit=${limit}`    
    },
    batman:({
        key = "65f8af943b45445ad1fb77bcbad38a34da6aad14",
        batman ='superman',
        limit =10,
    }) => {
        return `/issues/?api_key=${key}&format=json&filter=name:${batman}&limit=${limit}`
    },
}

export default api;