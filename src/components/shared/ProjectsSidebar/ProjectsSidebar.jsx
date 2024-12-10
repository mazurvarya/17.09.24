import Switcher from "@/components/shared/Switch/switch.jsx"
import style from "./style.module.css"
// import { useState } from "react"


const ProjectsSidebar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.projects}>
                <h1>Projects</h1>
            </div>

            <Switcher />
        </div>

        
    )



    // const [number, setNumber] = useState(0)

    // const plus = () => {
    //     setNumber(number + 1)
    // }

    // const minus = () => {
    //     setNumber(number - 1)
    // }


    // return (
    //     <div className={style.wrapper}>
    //         <h1>{number}</h1>
    //         <button onClick={plus}>+</button>
    //         <button onClick={minus}>-</button>

    //     </div>
    // )
}
export default ProjectsSidebar
