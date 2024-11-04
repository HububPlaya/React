const Message = ({
    moneyAvailable,
    price,
    name
}) => {
    return (
        <>
        {
        moneyAvailable >= price ? `Success! The remaining amount of money for ${name} is: ${moneyAvailable - price}. Thank you!`
        : `Failure! The bank account balance for ${name} is: ${moneyAvailable}. Unfortunately, you need to pay: ${price}.`
        }
        </>
    )
}

export default Message;