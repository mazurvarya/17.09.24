import s from "./style.module.css";


const ButtonDefault = (props) => {
    return <button className={s.btn}>{props.text}</button>
}

const ButtonIcon = ({icon})=>{
    return <button className={s.btnIcon}>
        <img src={icon} alt="" />
    </button>
}
export { ButtonDefault, ButtonIcon};
