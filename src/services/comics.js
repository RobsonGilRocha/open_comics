import api,{endpoints} from './index'


export async function getComics(key,sort,limit){
    const { get } = await api
    return get(endpoints.comics(key,sort,limit))
}