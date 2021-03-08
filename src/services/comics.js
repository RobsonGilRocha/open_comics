import api,{endpoints} from './index'


export async function getComics(limit){
    const { get } = await api
    return get(endpoints.comics(limit))
}