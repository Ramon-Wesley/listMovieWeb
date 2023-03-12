import {useEffect,useState,useCallback} from  'react'
import { Carousel } from '../../shared/components/carousel/Carousel'
import { ViewsScreen } from '../../shared/components/ViewsScreen'
import { getAll,IGetAll } from '../../shared/services/api' 






export const Dashboard:React.FC=()=>{
const[listMovies,setListMovies]=useState<IGetAll[]>([])
useEffect(()=>{
apiGet()
},[])

const apiGet=useCallback(async()=>{
    console.log('ok')
    const result = await getAll()

    if(result instanceof Error){
        alert(result.message)
    }else{
        setListMovies(result)
    }
},[])
    return(
    <>
    <ViewsScreen/>
    {listMovies.length > 0 &&(
        listMovies.map((list,key)=>(
            <Carousel
            key={key}
            results={list.items.data.results}
            title={list.title}
            />
            
            
        ))
    )}
    </>

    )
}