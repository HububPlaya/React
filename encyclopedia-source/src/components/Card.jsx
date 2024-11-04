import React from "react";

const Card = ({link, alt, description}) => {
    return (
        <>
        <img src={link} alt={alt} />
        <p>{description}</p>
        </>
    )
}

export default Card;