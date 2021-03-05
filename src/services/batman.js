import api,{endpoints} from './index'


export async function getBatman(key,batman,limit){
    const { get } = await api
    return get(endpoints.batman(key,batman,limit))
}