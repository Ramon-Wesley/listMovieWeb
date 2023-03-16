import { IMovie, IMovieList, IValuecast } from '../../services/api'
import {motion} from 'framer-motion';
import {Box,useTheme,Paper, useMediaQuery} from '@mui/material'
import Typography from "@mui/material/Typography"
import { useState,useRef, useEffect,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MotionBox } from '../MotionElements';

interface ICarousel{
    title?:string;
    results?:IMovie[]
    isDetail?:boolean;
    cast?:IValuecast[] | undefined
}


export const Carousel:React.FC<ICarousel>=({results,title,isDetail=false,cast})=>{
const theme=useTheme()
const refDivMotion=useRef<HTMLDivElement>(null)
const [divWidth,setDivWitdth]=useState<number>(0)
const smDown=useMediaQuery(theme.breakpoints.down('sm'))
const mdDown=useMediaQuery(theme.breakpoints.down('md'))
const navigate=useNavigate()

useEffect(()=>{
    if(refDivMotion.current){
        let resultScroll=refDivMotion.current?.scrollWidth - refDivMotion.current?.offsetWidth 
            setDivWitdth(resultScroll) 
    }
},[smDown,mdDown])

const handleNavigate=useCallback((id:number,type:string)=>{
    navigate(`/detalhe/${type}/${id}`)
},[])

    return(
        <><Typography>{divWidth}</Typography>
        <Typography variant='h5' margin={2}>{title}</Typography>

        <MotionBox
        whileTap={{cursor:"grabbing"}}
        ref={refDivMotion}
        style={{
            overflow:'hidden'
        }}
        >
        <MotionBox
        drag='x'
        dragConstraints={{right: 0, left:-divWidth}}
        transition={{ease:'easeIn'}}
        style={{
            gap:5,
            display:'flex',
            alignItems:'center', 
        }}>

        { (results && results?.length> 0&& !isDetail) &&(results?.map((res)=>(
            <Box>

                    <MotionBox component={Paper} 
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    transition={{ease:'easeIn'}}
                    key={res.id}
                    style={{
                        borderRadius:'10%',
                        backgroundImage:`url(https://image.tmdb.org/t/p/w200${res.poster_path})`,
                        backgroundSize:'100% 100%',
                        backgroundPosition:'center center',
                        height:smDown?theme.spacing(18):theme.spacing(23),
                        width:smDown?theme.spacing(18):theme.spacing(23),
                    }}
                    onClick={()=>handleNavigate(res.id,res.media_type? res.media_type : title === "Originais do Netflix"?'tv':'movie')}>
                
            </MotionBox>
                
                    </Box>
              
            
            )))}

            {(isDetail && cast ) &&(
                cast.map((resultCast)=>(

                    <MotionBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    transition={{ease:'easeIn'}}

  >
          <MotionBox component={Paper} display='flex'
          alignItems='flex-end'
          style={{
              borderRadius:'10%',
              backgroundImage:`url(https://image.tmdb.org/t/p/w200${resultCast.profile_path})`,
              backgroundSize:'100% 100%',
              backgroundPosition:'center center',
              height:smDown?theme.spacing(10):theme.spacing(12),
              width:smDown?theme.spacing(10):theme.spacing(12),
          }}
          >
          <Typography>{resultCast.name}</Typography>
          </MotionBox>
      </MotionBox>
            ))
            )}
            
            </MotionBox>
            </MotionBox>
            </>
        
    )
}