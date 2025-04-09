import './App.css'
import {ABranch} from "./components/ABranch.tsx";
import {BBranch} from "./components/BBranch.tsx";
import {useState} from "react";
import { MyContext } from './Context/MyContext.tsx';

function App() {
  const [themeColor, setThemeColor] = useState<string>('light')

  return (
    <div>
      <MyContext.Provider value={{
        theme: themeColor,
        changeTheme: (themeValue: string) => {
          setThemeColor(themeValue)
        }
      }}>
        <ABranch/>
        <BBranch/>
      </MyContext.Provider>
    </div>
  )
}

export default App;
