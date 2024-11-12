function HandleInput(element) {
    console.log("Что-то ввели", element);
}

function HandleSelect(element) {
    console.log("Элемент выбран", element.target.value)
}

const TextArea = ( {placeholder, bgColor, Textsize} ) => {
    return (
     <textarea 
        style={{ background: bgColor, fontSize: Textsize,
         }} 
        onSelect={HandleSelect} onInput={HandleInput} 
        type="text" placeholder="введите что-нибудь" name="" id=""></textarea>

    )
}


export {TextArea}