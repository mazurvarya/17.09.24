import { ButtonIcon } from "../UI/Buttons/buttons.jsx"
import style from "./style.module.css"
import search from "@/assets/icons/search.svg"
import notification from "@/assets/icons/notification.svg"
import calender from "@/assets/icons/calender.svg"
import SearchBar from "@/components/shared/UI/SearchBar/searchBar.jsx"
import { useState } from "react"


const Header = () => {

    const (isSearchActive, setIsSearchActive) = useState(false)

     const handleSearch = (query) => {
        console.log('Поиск:', query);

    return ( 
        <header className={style.header}>
            <h1>Welcome back, Username</h1>
            <div className={style.widgets}>
            <SearchBar onSearch={handleSearch} />
                <ButtonIcon icon={search}/>
                <ButtonIcon icon={notification}/>
                <div className={style.date}>
                    <ButtonIcon icon={calender}/>
                    <p>19 мая 2022</p>
                </div>
            </div>
        </header>
    )
}
export default Header