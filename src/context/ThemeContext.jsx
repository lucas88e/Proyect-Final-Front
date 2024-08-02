import { createContext,useState,useContext } from "react"; 

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children})=>{

    const [theme, setTheme] = useState("light")

    const values = {theme,setTheme}

    return(

    <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>   )
}

export const useThemeContext = ()=>{

    const context = useContext(ThemeContext)
    return context
}