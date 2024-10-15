import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons.jsx"
import styles from "./style.module.css"
import more from "@assets/icons/more.svg"
import progress from "@assets/icons/progress.svg"
const TodoCard = ({card}) => {
    return (
        <article className={styles.card}>
            <div className={styles.top}>
            <h2>{card.title}</h2>
            <h3>{card.project}</h3>
            </div>
            <ButtonIcon icon={more}/>
            <div className={styles.progress}>
                <ButtonIcon icon={progress}/>
                <h4>{card.progress}</h4>

            </div>

            <div className={styles.dates}>
                <p>12 Nov 2022</p>
            </div>
        </article>
    )
}
export default TodoCard