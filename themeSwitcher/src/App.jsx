import { useEffect, useState } from 'react'
import ThemeContextProvider from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setTheme] = useState("light");

  const lightTheme = () => {     {/* same name se function bnayenge context wale to inki functionality unme chli jayegi*/}
     setTheme("light")
  }

  const darkTheme = () => {
    setTheme("dark")
  }

  //actual change in the theme
  useEffect(() => {
     document.querySelector("html").classList.remove("light", "dark");
     document.querySelector("html").classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
               <Card />
            </div>
        </div>
    </div>
    </ThemeContextProvider>
  )
}

export default App
