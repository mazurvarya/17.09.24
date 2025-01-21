import Header from "@/components/shared/Header/header.jsx"
import NavBar from "@/components/shared/NavBar/NavBar.jsx"
import ProjectsSidebar from "@/components/shared/ProjectsSidebar/ProjectsSidebar.jsx"
import TodoBox from "@/components/shared/TodoBox/TodoBox.jsx"
import SearchBar from "@/components/shared/UI/SearchBar/searchBar.jsx"

const todoList = [
    {
        id: 1,
        title: "купить молоко",
        project: "покупки",
        status: "в процессе",
        dueDate: "01.10.2015",
        progress: 3,
    },
    {
        id: 2,
        title: "поспать",
        project: "дом",
        status: "в ожидании",
        dueDate: "02.02.2015",
        progress: 3,
    }
]

function Main() {
    return (
        <>
        <NavBar />
        <ProjectsSidebar />
        
        
        <main>
            <Header />
            <SearchBar />
        </main>
        <TodoBox todoList={todoList} title="Projects" />
        </>
    )
}

export default Main