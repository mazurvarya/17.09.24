import { Button, ButtonIcon } from "@/components/shared/UI/Buttons/buttons.jsx"
import moon from "@/assets/icons/moon.svg"

import Header from "@/components/shared/Header/header.jsx"

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
             child={"New Template"}></Button>
            <Header />
        </main>
    )
}