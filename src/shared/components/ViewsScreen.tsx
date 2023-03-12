import { Box, Paper, Typography } from "@mui/material"
import { IMovie } from "../services/api"




interface IViewsScreen{
    result:IMovie | undefined
}

export const ViewsScreen:React.FC<IViewsScreen>=({result})=>{
    return(
        <>
        <Box  width='100%' height='90vh'  sx={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${result?.poster_path})`,
            backgroundSize:'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat',
        }}>
                <Box width='100%' height='100%'   style={{
                    backgroundImage:'linear-gradient(to top right,rgba(0,0,0),rgba(0,0,0,0.1))'
                }} >
                    <Box width='50%' height='100%' display='flex' flexDirection='column' padding={2} gap={1}>
                        <Typography variant="h3">{result?.title}</Typography>
                        <Typography variant="subtitle1" color='#FFFFFF'>{result?.overview}</Typography>

                    </Box>

                </Box>
        </Box>
        </>
    )
}