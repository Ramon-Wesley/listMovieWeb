import { Box } from "@mui/material"
import { IMovie } from "../services/api"




interface IViewsScreen{
    result:IMovie | undefined
}

export const ViewsScreen:React.FC<IViewsScreen>=({result})=>{
    return(
        <>
        <Box  width='100vw' height='90vh' sx={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${result?.poster_path})`,
            backgroundSize:'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat'
        }}>

        </Box>
        </>
    )
}