import { IMovieList } from '../../services/api'
import {motion} from 'framer-motion';
import {Box,useTheme,Paper, useMediaQuery} from '@mui/material'
import Typography from "@mui/material/Typography"
import { useState,useRef, useEffect } from 'react';
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
            height:smDown?theme.spacing(18):theme.spacing(20),
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
            <Box component={Paper}  onClick={()=>navigate(`/detalhe/${res.id}`)}>
               <img style={{pointerEvents:'none',objectFit:'cover'}}  src={`https://image.tmdb.org/t/p/w200${res.poster_path}`}/>
            </Box>
                </motion.div>
            
            )))}
            
        </motion.div>
            </motion.div>
            </>
        
    )
}