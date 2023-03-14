import { IMovie, IMovieList } from '../../services/api'
import {motion} from 'framer-motion';
import {Box,useTheme,Paper, useMediaQuery} from '@mui/material'
import Typography from "@mui/material/Typography"
import { useState,useRef, useEffect,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface ICarousel extends IMovieList{
    title:string
}


export const Carousel:React.FC<ICarousel>=({results,title})=>{
const theme=useTheme()
const refDivMotion=useRef<HTMLDivElement>(null)
const [divWidth,setDivWitdth]=useState<number>(0)
const smDown=useMediaQuery(theme.breakpoints.down('sm'))
const mdDown=useMediaQuery(theme.breakpoints.down('md'))
const navigate=useNavigate()

useEffect(()=>{
    setDivWitdth(Number(refDivMotion.current?.scrollWidth) - Number(refDivMotion.current?.offsetWidth)) 
},[])

const handleNavigate=useCallback((id:number,result:IMovie)=>{
    navigate(`/detalhe/${id}`)
    const resultChoice=JSON.stringify(result)
    localStorage.setItem('choice',resultChoice)
},[])

    return(
        <>
        <Typography variant='h5' margin={2}>{title}</Typography>
        <motion.div
        whileTap={{cursor:"grabbing"}}
        ref={refDivMotion}
        style={{
            overflow:'hidden'
        }}
        >
        <motion.div 
        drag='x'
        dragConstraints={{right: 0, left:-divWidth}}
        style={{
            gap:5,
            display:'flex',
            alignItems:'center', 
        }}>

        { results.length > 0 &&(results.map((res)=>(
            <motion.div 
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{ease:'easeIn'}}
            key={res.id}
        
            >
            <Box component={Paper} 
            style={{
                borderRadius:'10%',
                backgroundImage:`url(https://image.tmdb.org/t/p/w200${res.poster_path})`,
                backgroundSize:'100% 100%',
                backgroundPosition:'center center',
                height:smDown?theme.spacing(18):theme.spacing(23),
                width:smDown?theme.spacing(18):theme.spacing(23),
            }}
            onClick={()=>handleNavigate(res.id,res)}>
                
               
            </Box>
                </motion.div>
            
            )))}
            
        </motion.div>
            </motion.div>
            </>
        
    )
}