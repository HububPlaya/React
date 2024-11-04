
const Goods = ({products}) => {
    return (
        <ul>
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