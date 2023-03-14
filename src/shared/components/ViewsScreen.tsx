import { Box, Button, Icon, Paper, Typography, useMediaQuery, useTheme } from "@mui/material"
import { IMovie } from "../services/api"
import { useNavigate } from "react-router-dom"



interface IViewsScreen{
    result?:IMovie | undefined,
    descriptionBox?:boolean,
    children?:React.ReactNode
}

export const ViewsScreen:React.FC<IViewsScreen>=({result,descriptionBox=true,children})=>{
    const theme=useTheme()
    const navigate=useNavigate()
    const smDown=useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown=useMediaQuery(theme.breakpoints.down('md'))
    let overview:string=''
    
    if(result?.overview){
      if (result.overview.length > 200){
            overview=result.overview.substring(0,200) + '...'
        }else{
            overview=result.overview
        }
    } 
    return(
        <>
        <Box  width='100%' height={smDown? '60vh':mdDown?'80vh':'90vh'}   sx={{
            backgroundImage:result?.poster_path ? `url(https://image.tmdb.org/t/p/original${result?.poster_path})`: '',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 100%',
            backgroundPosition:'center center'
        }}>
                <Box width='100%' height='100%'   style={{
                    backgroundImage:'linear-gradient(to top right,rgba(0,0,0),rgba(0,0,0,0.1))'
                }} >
                    {descriptionBox &&(

                        <Box width={smDown ? '100%' : mdDown? '70%' : '50%'} height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' paddingLeft={2} gap={1}>
                    <Box width='100%'>
                        <Typography variant={smDown ? 'h4' : mdDown? 'h3' : 'h2'}>{result?.title}</Typography>
                    </Box>
                        <Typography variant="subtitle1" color='#FFFFFF'>{overview}</Typography>
                        <Box width='100%'>
                        <Button variant="contained" startIcon={<Icon>add</Icon>} onClick={()=>navigate(`/detalhe/${result?.id}`)}>Ver mais</Button>
                        </Box>

                    </Box>
                        )}

                        {(!descriptionBox) &&(
                            children
                        )
                        }

                </Box>
        </Box>
        </>
    )
}