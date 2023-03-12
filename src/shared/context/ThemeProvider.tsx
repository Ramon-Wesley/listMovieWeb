import { Box, ThemeProvider } from "@mui/material"
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { DarkTheme, LightTheme } from "../themes"

interface IThemeContext{
    toogleTheme:()=>void
    theme:'dark'|'light'

}
 const  themeContext=createContext({} as IThemeContext)

 export const UseThemeContext=()=>{
    return useContext(themeContext)
 }

interface IThemeAppProvider{
    children:React.ReactNode
}
export const ThemeAppProvider:React.FC<IThemeAppProvider>=({children})=>{
const [theme,setTheme]=useState<'dark'|'light'>('dark')

const toogleTheme=useCallback(()=>{
    setTheme((oldSetTheme)=>oldSetTheme === 'dark'? 'light':'dark')
},[])
const themeValue=useMemo(()=>{
    if(theme === 'dark') return DarkTheme
    return LightTheme
    
},[theme])
    return(
        <themeContext.Provider value={{theme,toogleTheme}}>
           <ThemeProvider theme={themeValue}>
                <Box bgcolor={themeValue.palette.background.default}>
                      {children}
                </Box>
           </ThemeProvider>

        </themeContext.Provider>
    )
}