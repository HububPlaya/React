import { useEffect, useState } from "react"
import fetchData from "./service/api"
const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchData()
        .then((resp) => {
            setData(resp.links)
        })
        .catch((err) => {
            setError(err)
        })
    }, [])
    return (
        <>
        
        {error ? (
            <p>Error: {error}</p>
            ) : data.length === 0 ?(
            <p>loading...</p>) 
            : (
                <ul>
                    {data.map(({label, url}) => (
                        <li key={label}>
                            {url}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default DataFetcher;