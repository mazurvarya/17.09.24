import s from "./style.module.css"

const ButtonIcon = ({icon, style}) => {
    return ( 
        <button className={s["btn-icon"]} style={style}>
        
            <img src={icon} alt="" />
        </button>
    )
}

const Button = ({styles, children}) => {
    return <button style={styles}>{children}</button>
}


export { ButtonIcon, Button }