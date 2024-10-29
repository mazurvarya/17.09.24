import { Button, ButtonIcon } from "@/components/shared/UI/Buttons/buttons.jsx"
import moon from "@/assets/icons/moon.svg"

import Header from "@/components/shared/Header/header.jsx"

import TodoBox from "@/components/shared/TodoBox/TodoBox.jsx"

const cardMass = [
    {
    title:"Купить молоко",
    project:"покупки",
    status:"в процессе",
    dueDate:"01.10.2015",
    progress: 3,
    },
    {
    title:"Купить молоко",
    project:"покупки",
    status:"в процессе",
    dueDate:"01.10.2015",
    progress: 56,
        },
    {
    title:"Вынести мусор",
    project:"дела по дому",
    status:"выполнен",
    dueDate:"01.10.2018",
    progress: 100,
    }
]

export default function Home() {
    return (
        <main>
            <h1>Home</h1>
            <ButtonIcon icon={moon}/>
            <Button 
                styles={{
                    backgroundColor: "4B69FF",
                    color: "white",
                    borderRadius: "19px",
                    border: "none",
                    padding: "12px 24px",
                    outline: "none",
             }}
             >
                New templates
             </Button>
            <Header />

            <TodoBox title={"To do"} todoList={cardMass}/>
            <TodoBox title={"In progress"} todoList={cardMass}/>
            <TodoBox title={"Done"} todoList={cardMass}/>


        </main>
    )
}