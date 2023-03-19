import { useParams,useNavigate } from "react-router-dom"
import {useEffect,useState,useCallback}from 'react'
import { IMovieList, moviesService } from "../../shared/services/api"
import { Paper, Typography,useTheme,useMediaQuery,Box, Button } from "@mui/material"
import { MotionBox } from "../../shared/components/MotionElements"
import { UseDebounce } from "../../shared/hook"
export const SearchItems:React.FC=()=>{
const{type}=useParams()
const [page,setPage]=useState<number>(1)
const [listChoice,setListChoice]=useState<IMovieList>()
const theme=useTheme()
const {debounce}=UseDebounce()
const smDown=useMediaQuery(theme.breakpoints.down('sm'))
const mdDown=useMediaQuery(theme.breakpoints.down('md'))
const navigate=useNavigate()
useEffect(()=>{
    debounce(()=>{
        if(page === 0){
            setPage(1)
        }else{

            moviesService.getTypeMovies(type,page,'').then((res)=>{
                if(res instanceof Error){
                console.log(res.message)
            }else{
                setListChoice(res)
            }
        })
    }
    })
},[page])
useEffect(()=>{
    setPage(0)
    setListChoice(undefined)
},[type])
const handleNavigate = useCallback((id: number, type: string) => {
    navigate(`/detalhe/${type}/${id}`)
}, [])
const handleView=useCallback(()=>{
    setPage((oldPage)=>oldPage + 1)
},[])
    return(
        <>
         <MotionBox display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='auto' >
            <Box display='flex' gap={2} flexWrap='wrap' width='80%'>

            {listChoice &&(
                listChoice.results.map((list)=>(
                    <MotionBox component={Paper}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: 'easeIn' }}
                    style={{
                        
                            borderRadius: '10%',
                            backgroundImage:list.poster_path ? `url(https://image.tmdb.org/t/p/w200${list.poster_path})`: "",
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center center',
                            height: smDown ? theme.spacing(18) : theme.spacing(23),
                            width: smDown ? theme.spacing(18) : theme.spacing(23),
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'end'
                        }}
                        onClick={() => handleNavigate(list.id,type ? type:'' )}>
                    

                    </MotionBox>
                ))
                )}
                </Box>
                <Button variant="contained" onClick={()=>handleView()}>Ver mais</Button>
         </MotionBox>
        </>
    )
}