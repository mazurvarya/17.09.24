import { useState } from "react";
import s from "./inputs.module.css"

function HandleInput(element) {
    console.log("Что-то ввели", element);
}

function HandleSelect(element) {
    console.log("Элемент выбран", element.target.value)
}


const InputDefault = ({ placeholder }) => {
    return <input onSelect={HandleSelect} onInput={HandleInput} type="text"
    placeholder={placeholder} />
}

const InputPassword = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        console.log("жмакнули на кнопку")
        setIsVisible(!isVisible)

    }

    return <div>
        <input type={isVisible == true ? "text" : "password"} />
        <button onClick={handleClick}>показать пароль</button>
    </div>
}

export { InputDefault, InputPassword }