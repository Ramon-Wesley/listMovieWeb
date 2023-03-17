import { Box, Typography,useTheme,useMediaQuery, Paper, Button } from "@mui/material"
import { ViewsScreen } from "./ViewsScreen"
import {useEffect,useState} from 'react'
import { api, IMovie, moviesService } from "../services/api"
import {useParams} from 'react-router-dom'
import { Carousel } from "./carousel/Carousel"



export const ViewDetailScreen:React.FC=()=>{
    const theme=useTheme()
    const [choiceMovie,setChoiceMovie]=useState<IMovie>()   
    const smDown=useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown=useMediaQuery(theme.breakpoints.down('md'))
    const {id,type}=useParams()
   useEffect(()=>{
    moviesService.getById(Number(id),String(type)).then((res)=>{
        if(res instanceof Error){
        }else{
            setChoiceMovie (res)   
        }
    })
   },[]
   )
   console.log('ok111')

    return(<Box>

                <ViewsScreen 
                descriptionBox={false}
                result={choiceMovie}
                >   
                    <Box display='flex'  flexDirection='column' justifyContent='center' alignItems='center' height='100%'
                    style={{
                        backgroundImage:'linear-gradient(to top,rgba(0,0,0),rgba(0,0,0,0.4))'
                    }}>
                      
                        <Box  display='flex' alignItems='center' flexDirection={smDown ? 'column':'row'}  justifyContent='space-between' width={smDown?'100%':'50%'}  gap={2}>
                           
                           {!smDown &&(
                               <Box flex={1}
                               >
                                <img  style={{borderRadius:`5%`}} height='100%' src={choiceMovie?.poster_path ?`https://image.tmdb.org/t/p/w200${choiceMovie?.poster_path}`: ""}/>
                            </Box>
                           )}

                        <Box flex={1} width='100%' >
                        <Typography variant="h4">{choiceMovie?.title ? choiceMovie.title : choiceMovie?.name}</Typography>
                        <Typography >{choiceMovie?.overview}</Typography>
                        <Box display='flex' gap={1}>
                        {choiceMovie?.genres.map((genre,key)=>(
                            
                            <Typography key={key} bgcolor='red' borderRadius='5%' padding='2px' >{genre.name}</Typography>
                            ))
                            
                        }
                        </Box>
                        
        
                            <Carousel
                            
                            cast={choiceMovie?.credits?.cast} 
                            isDetail={true}
                            />
                        
                           
                        </Box>
                        </Box>
                        </Box>
                </ViewsScreen>
                {/* {choiceMovie?.videos?.results?.map((video,value)=>
                        (
                            <Box key={value} display='flex' justifyContent='center' marginBottom={2}>
                            <iframe width='80%'height='auto' allowFullScreen src={`https://www.youtube.com/embed/${video.key}`} />
                            </Box>     
                            )
                            )
                } */}
                
                </Box>
    )
}