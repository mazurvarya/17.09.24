import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons.jsx"
import styles from "./style.module.css"
import more from "@assets/icons/more.svg"
import progress from "@assets/icons/progress.svg"
import { Link } from "react-router-dom"


const TodoCard = ({card}) => {
    return (
        <Link to={`todo/${card.id}/${card.title}`}>
        <article className={styles.card}>
            <div className={styles.top}>
            <h2>{card?.title}</h2>
            <h3>{card?.project}</h3>
            <h2>{card?.status}</h2>
        

            
            <div className={styles.progress}>
                <div style={{
                        width: card.progress + "%",
                        backgroundColor: card.progress <= 40 
                        ? "var(--progress-bar-low)" 
                        : card.progress <= 99
                        ? "var(--progress-bar-middle)"
                        : "var(--progress-bar-complete)"
                    }} className={styles.progress_bar}>
                </div>
            </div>
            

            </div>
            <ButtonIcon icon={more}/>
            <div className={styles.progress_wrapper}>
                <ButtonIcon icon={progress}/>
                <p>Progress</p>
              
                <h4>{card.progress}</h4>

            </div>


            <div className={styles.dates}>
             
            </div>
        </article>
        </Link>
    )
}
export default TodoCard