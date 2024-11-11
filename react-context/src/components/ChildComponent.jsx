import { useContext } from "react"
import context from "../context/context"

const ChildComponent = () => {
    const data = useContext(context);
    return (
        <p>
            {data} 
            <br/>
            This sentence comes from the child component.
        </p>
    )
}

export default ChildComponent