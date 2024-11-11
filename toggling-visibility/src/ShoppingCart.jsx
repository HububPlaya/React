import { useMemo } from "react"

const ShoppingCart = ({products}) => {
    const total = useMemo(() => {
        let sum = 0;
        for(const item of products) {
            sum += item.price * item.quantity;
        }
        return sum;
    }, [products])
    return (
        <div>
            <h2>Calculate the price</h2>
            <ul>
                {products.map(({id, name, price, quantity}) => (
                    <li key={id}>
                        <p>
                            <span>Item: {name}</span>
                            <br/>
                            <span>Calculation: {price} x {quantity}</span>
                        </p>
                    </li>
                ))}
            </ul>
            <h3>Total: {total}</h3>
        </div>
    )
}

export default ShoppingCart;