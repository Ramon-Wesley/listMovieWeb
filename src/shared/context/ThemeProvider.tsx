
interface IThemeContext{
    toogleTheme:()=>void,
    theme:'dark'|'light',

}


interface IThemeProvider{
    children:React.ReactNode
}
export const ThemeProvider:React.ReactFC<IThemeProvider>=({children})=>{

    return(
        <>
        </>
    )
}