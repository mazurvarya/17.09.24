import Header from "@/components/shared/Header/header.jsx"
import NavBar from "@/components/shared/NavBar/NavBar.jsx"
import ProjectsSidebar from "@/components/shared/ProjectsSidebar/ProjectsSidebar.jsx"
import SearchBar from "@/components/shared/UI/SearchBar/searchBar.jsx"


function Main() {
    return (
        <>
        <NavBar />
        <ProjectsSidebar />
        
        
        <main>
            <Header />
            <SearchBar />
        </main>
        <h1>Это главная</h1>
        </>
    )
}

export default Main