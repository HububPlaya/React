const fetchData = async () => {
    const URL = "https://catfact.ninja/facts";

    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("An error occurred");
        }
        return response.json();

}

export default fetchData;