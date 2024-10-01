import s from "./style.module.css"

const ButtonIcon = ({icon, style}) => {
    return ( 
        <button className={s["btn-icon"]} style={style}>
        
            <img src={icon} alt="" />
        </button>
    )
}

const Button = ({text, styles, child}) => {
    return <button style={styles}>{child}</button>
}


export { ButtonIcon, Button }