import mouse from "../../assets/images/mouse.jpg";

export default function Main() {
    console.log(mouse);
    
    return (
        <main>
            <img src={mouse} alt="" />
        </main>
    )
}