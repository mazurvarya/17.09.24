import mouse from "../../assets/images/mouse.jpg";
import { ButtonDefault, ButtonIcon } from "../UI/buttons/buttons";
import moon from "@assets/icons/moon.svg"

export default function Main() {
    console.log(mouse);
    
    return (
        <main>
            <img src={mouse} alt="" />
            <ButtonDefault text="текст пропс"></ButtonDefault>
            <ButtonDefault text="другой текст"></ButtonDefault>
            <ButtonIcon icon={moon}/>
            <ButtonIcon icon={mouse}/>

        </main>
    )
}