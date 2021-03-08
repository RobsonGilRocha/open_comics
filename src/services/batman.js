import api,{endpoints} from './index'


export async function getBatman(limit){
    const { get } = await api
    return get(endpoints.batman(limit))
}