import { useParams } from "react-router-dom"

export function TodoPage() {
    const params = useParams()
    console.log(params);
    
    return(
        <main>
            <h1>страница отдельной todo {params.id} </h1>
            <h2> {params.title} </h2>
        </main>
    )
    
}