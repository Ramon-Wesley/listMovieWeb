import { IMovieList } from '../../services/api'
import {motion} from 'framer-motion';
import {Box,useTheme,Paper, useMediaQuery} from '@mui/material'
import Typography from "@mui/material/Typography"
import { useState,useRef, useEffect } from 'react';

interface ICarousel extends IMovieList{
    title:string
}


export const Carousel:React.FC<ICarousel>=({results,title})=>{
const theme=useTheme()
const refDivMotion=useRef<HTMLDivElement>(null)
const [divWidth,setDivWitdth]=useState<number>(0)
const smDown=useMediaQuery(theme.breakpoints.down('sm'))
const mdDown=useMediaQuery(theme.breakpoints.down('md'))


useEffect(()=>{
    setDivWitdth(Number(refDivMotion.current?.scrollWidth) - Number(refDivMotion.current?.offsetWidth)) 
},[])

    return(
        <>
        <Typography component='h3'>{title}</Typography>
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
            height:theme.spacing(20),
            gap:5,
            display:'flex',
            alignItems:'center', 
        }}>

        { results.length > 0 &&(results.map((res)=>(
            <motion.div 
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{ease:'easeIn'}}
            style={{
                height:theme.spacing(38),
                width:theme.spacing(38)
            }}
            key={res.id}
            >
            <Box component={Paper}   >
               <img style={{pointerEvents:'none',objectFit:'cover'}}  src={`https://image.tmdb.org/t/p/w200${res.poster_path}`}/>
            </Box>
                </motion.div>
            
            )))}
            
        </motion.div>
            </motion.div>
            </>
        
    )
}