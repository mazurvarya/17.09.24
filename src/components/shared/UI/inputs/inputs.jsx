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

export { InputDefault }