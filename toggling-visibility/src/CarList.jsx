import { useMemo, useState } from "react";

const CarList = ({vehicles}) => {
    const [searchInput, setSearchInput] = useState("");
    const filteredCars = useMemo(() => {
        return !searchInput ? vehicles : vehicles.filter((cars) => cars.name.toLowerCase().includes(searchInput.toLowerCase()))
    }, [searchInput])
    return (
        <div>
        <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
        />

        <ul>
            {filteredCars.map((cars) => (
                <li key={cars.id}>
                    <img src={cars.image} alt={cars.name}/>
                    <p>{cars.name}</p>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default CarList;