import { useContext } from "react";
import context from "../context/context";
const Filter = () => {
    const { input, handleInputChange } = useContext(context);


    return (
        <form>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default Filter;