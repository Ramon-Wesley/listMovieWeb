import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Icon,
    Box,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
  } from "@mui/material";
  import { useNavigate,useParams } from "react-router-dom";
  import { motion,useScroll,useTransform} from "framer-motion";
  import { UseThemeContext } from "../context";
import { useState } from "react";
 
  interface IDrawerApp {
    children: React.ReactNode;
  }
  export const DrawerApp: React.FC<IDrawerApp> = ({ children }) => {
    const navigate=useNavigate();
    const [value,setValue]=useState<string>('')
    const {type}=useParams()
    const{toogleTheme}=UseThemeContext()
    const{scrollYProgress}=useScroll()
    const opacity = useTransform(
      scrollYProgress,
      [0,0.05],
      [0,1],
      {clamp:true}
    )
    return (
      <>
        <motion.div
        style={{
          opacity,
          transition:'opacity 0.5s ease-out',
        }}
        >
          <AppBar>
            <Toolbar component={Box} display='flex' justifyContent='space-between'>
              <IconButton onClick={()=>navigate('/')}>
                <Icon color="error">movie</Icon>
                <Typography>Movie List Web</Typography>
              </IconButton>
              <Box display='flex' justifyContent='center' alignItems='center' >

              <FormControl size="small" sx={{minWidth:'120px'}}>
                <InputLabel>Categorias</InputLabel>
                <Select
                label='Categorias'
                value={value}
                onChange={(e)=>setValue(e.target.value as string)}
                >
                
                <MenuItem
                value='movie'
                onClick={()=>navigate('/movie')}
                >
                <Typography>Movie</Typography>
                </MenuItem>
                <MenuItem
                value='tv'
                onClick={()=>navigate('/tv')}
                >
                <Typography>Tv</Typography>
                </MenuItem>
                </Select>
              </FormControl>
              <IconButton onClick={toogleTheme}><Icon>dark_mode</Icon><Typography>Trocar tema</Typography></IconButton>
                </Box>
            </Toolbar>
          </AppBar>
        </motion.div>
        <Box height='100%'>
        {children}
        </Box>
     
      </>
    );
  };
  