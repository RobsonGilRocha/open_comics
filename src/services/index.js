import axios from 'axios'
import { apiKey } from '../utils/config'

const api = axios.create({ baseURL:'https://comicvine.gamespot.com/api' })

export const endpoints = {
    comics:(limit)=> `/issues/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${limit}`,
    batman:(limit) => `/issues/?api_key=${apiKey}&format=json&filter=name:batman&limit=${limit}`
}

export default api;