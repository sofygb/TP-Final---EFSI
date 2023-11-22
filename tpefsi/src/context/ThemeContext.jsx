import { createContext, useState } from "react"

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [layout, setLayout] = useState(localStorage.getItem('layout') || 'white')

    let colors = {
        white: '#a19c9c',
        blue: '#1c5987'
    }

    document.querySelector('body').style.backgroundColor = colors[layout]
    localStorage.setItem('layout', layout)

    return(
        <ThemeContext.Provider value={{ layout, setLayout }}> 
            {children}
        </ThemeContext.Provider>
    )
}