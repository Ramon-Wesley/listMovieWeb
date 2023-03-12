import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";



export const LightTheme=createTheme({

 palette:{
    mode:'dark',
    primary:{
        main:red[500],
        light:red[300],
        dark:red[800]
    },
    secondary:{
        main:orange[500],
        light:orange[300],
        dark:orange[800]
    },
    background:{
        paper:'#DDDDDD',
        default:'#FFFFFF'
    }
 },
 typography:{
    allVariants:{
        color:red[600]
    }
 }   
})