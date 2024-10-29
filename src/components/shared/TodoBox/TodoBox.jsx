import { Button } from "@/components/shared/UI/Buttons/buttons.jsx"
import style from "./style.module.css"
import addIcon from "@assets/icons/AddTodo.svg"
import TodoCard from "@/components/shared/TodoCard/todo.jsx"



export default function TodoBox({todoList, title}) {
    return (
        <section className={style.box}>
            <header>
                <h2>To do (4)</h2>
                <Button styles={{
                    background: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "none",
                    color: "var(--text-white)",
                    fontsize: "16px"
                }}>
                    <img src="{addIcon}" alt="" />
                    Add view
                </Button>
            </header>
{
    todoList ? (
        <div className={style.list}>
                {todoList.map(function (card) {
                    return <TodoCard card={card}/>;
                })}
        </div>
    ) : (
        <div>
            <p>No tasks found</p>
        </div>
    )
}
           

        </section>
    )
}