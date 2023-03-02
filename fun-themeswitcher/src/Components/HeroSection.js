import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"

const HeroSection = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const currentTheme = AppTheme[theme]

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>Context API theme Toggler</h1>
            <p>These is nice paragraph.</p>
            <button style={{
                backgroundColor: "#26Ae60",
                padding: "10px 15px",
                fontSize: "20px",
                color: "#fff",
                border: `${currentTheme.border}`
            }} onClick={
                () => setTheme(theme === "light" ? "dark" : "light")
            }
            >{
                    `Turn ${theme === "light" ? "off" : "on"} lights`
                }</button>
        </div>
    )
}

export default HeroSection;