import { Box } from "@mui/material"


interface ILayoutBase{
 children:React.ReactNode   
}

export const layoutBase:React.FC<ILayoutBase>=({children})=>{

    return(
        <Box display='flex' flexDirection='column' gap={2}>
            {children}
        </Box>
        
        
    )
}