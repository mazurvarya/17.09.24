import { useState } from "react"
import style from "./style.module.css"

const Switcher = () => {

    const [isLight, setIsLight] = useState(false)

    const toggle = (newValue) => {
        setIsLight(!isLight)
    }

    return (
        <div className={style.switcher}>
           
            <button onClick={() => {
                toggle(true)
             }} className={isLight == true ? style["--active"] : style["--inactive"]}>Light</button>

            <button onClick={() => {
                toggle(false)
             }} className={isLight == true ? style["--inactive"] : style["--active"]}>Dark</button>
        </div>
    )
}

export default Switcher