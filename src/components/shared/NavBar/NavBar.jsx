import style from "./style.module.css";
import profile from "@assets/icons/profile.svg"
import main from "@assets/icons/main.svg"
import logout from "@assets/icons/logout.svg"
import calender from "@assets/icons/calender.svg"
import { NavLink } from "react-router-dom";

const linksList = [
{
    link: "/profile",
    icon: profile
},
{
    link: "/calender",
    icon: calender
},
{
    link: "/",
    icon: main
},
]

const NavBar = () => {
    return (
        <aside className={style.navbar}>
            <nav className={style.navigation}>
                {
                    linksList.map(function(item, i) {
                        console.log("номер", i, item);
                        return <>
                        <NavLink to={item.link}>
                            <img src={item.icon} alt="" />
                        </NavLink>
                        </>
                    })
                }
            </nav>
        </aside>
    )
}

export default NavBar;