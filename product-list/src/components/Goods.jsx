
const Goods = ({products}) => {
    const ProductsStyle = {
        width: "300px",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "lightblue"
    }
    return (
        <ul style={ProductsStyle}>
            {products.map(good => (
                <li key={good.id}>
                <h2>{good.name}</h2>
                <p>{good.description}</p>
                <span>{`Price: ${good.property}`}</span>
                </li>
                
            ))}
        </ul>
        
    );
    
}

export default Goods;