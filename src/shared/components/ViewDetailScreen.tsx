import { Box, Typography,useTheme,useMediaQuery } from "@mui/material"
import { ViewsScreen } from "./ViewsScreen"
import {useEffect,useState,useMemo} from 'react'
import { IMovie } from "../services/api"


export const ViewDetailScreen:React.FC=()=>{
    const theme=useTheme()
    const [choiceMovie,setChoiceMovie]=useState<IMovie>()   
    const smDown=useMediaQuery(theme.breakpoints.down('sm'))
const mdDown=useMediaQuery(theme.breakpoints.down('md')) 
   useEffect(()=>{
    let resultChoice=localStorage.getItem('choice')
    if(resultChoice !== null){
        setChoiceMovie (JSON.parse(resultChoice ) as IMovie)
    }
   },[]
   )

    return(<>
                <ViewsScreen 
                descriptionBox={false}
                result={choiceMovie}
                >
                    <Box display='flex'  flexDirection='column' justifyContent='center' alignItems='center' height='100%'
                    style={{
                        backgroundImage:'linear-gradient(to top,rgba(0,0,0),rgba(0,0,0,0.4))'
                    }}
                    >
                        <Box  display='flex' alignItems='center' flexDirection={smDown ? 'column':'row'} height={smDown?theme.spacing(40): theme.spacing(40)} justifyContent='space-between' width='50%'  gap={2}>
                            <Box flex={1}
                               >
                                
                                <img  style={{borderRadius:`5%`}} src={`https://image.tmdb.org/t/p/w200${choiceMovie?.poster_path}`}/>
                            </Box>
                        <Box flex={1}>
                        <Typography variant="h4">{choiceMovie?.title ? choiceMovie.title : choiceMovie?.name}</Typography>
                        <Typography>{choiceMovie?.overview}</Typography>
                        
                        </Box>
                        </Box>
                        </Box>
                </ViewsScreen>
    
    </>)
}