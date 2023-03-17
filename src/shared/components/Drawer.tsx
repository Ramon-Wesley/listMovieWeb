import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Icon,
    Box,
  } from "@mui/material";
  import { useState, useCallback, useEffect, useMemo } from "react";
  import { motion } from "framer-motion";
  import { UseDebounce } from "../hook";
  interface IDrawerApp {
    children: React.ReactNode;
  }
  export const DrawerApp: React.FC<IDrawerApp> = ({ children }) => {
    const [scrollValue, setScrollValue] = useState<boolean>(false);
    const {debounce}=UseDebounce(600)
  
    const handleScroll=useCallback(() => {
          if (window.scrollY > 0) {
            setScrollValue(true);
          } else if (window.scrollY === 0) {
            setScrollValue(false);
          }
      
      }, [scrollValue]);
    
    useEffect(()=>{
      window.addEventListener("scroll",()=>debounce(()=>{handleScroll()}) );
      return ()=>{window.removeEventListener("scroll",()=> ()=>{handleScroll()})}
      
    },[handleScroll,debounce])
  
    const appBarStyle=useMemo(()=>({
      opacity:scrollValue? 1 : 0
    }),[scrollValue])
  console.log('jdgsdgj')
    return (
      <Box>
        <motion.div
        style={{opacity:0}}
          animate={appBarStyle}
          transition={{
            duration: 0.2,
          }}
        >
          <AppBar>
            <Toolbar>
              <IconButton>
                <Icon>Menu</Icon>
              </IconButton>
              <Typography>Teste</Typography>
            </Toolbar>
          </AppBar>
        </motion.div>
        {children}
      </Box>
    );
  };
  