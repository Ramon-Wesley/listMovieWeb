import {useEffect,useState,useCallback, useMemo} from  'react'
import { Carousel } from '../../shared/components/carousel/Carousel'
import { ViewsScreen } from '../../shared/components/ViewsScreen'
import { moviesService,IGetAll, IMovie } from '../../shared/services/api' 






export const Dashboard:React.FC=()=>{
const[listMovies,setListMovies]=useState<IGetAll[]>([])
const[Trending,setTrending]=useState<IMovie>()
const [resultRandom,setResultRandom]=useState<number>(0) 
useEffect(()=>{
apiGet()
},[])

const apiGet=useCallback(async()=>{
    const result = await moviesService.getAll()
    
    if(result instanceof Error){
        alert(result.message)
    }else{
        setListMovies(result)
        let resultTrending:IMovie=result[2].items.data.results[Math.floor(Math.random() *  result[2].items.data.results.length)]
        if(resultTrending){
            setTrending(resultTrending)
        }
    }
},[])




    return(
    <>
    <ViewsScreen
    result={Trending}/>
    
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