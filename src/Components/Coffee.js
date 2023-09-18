import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
    return (
        <React.Fragment>
        <div>
        <h1>Coffee Name: {props.name}</h1>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
        <p>Quantity: {props.quantity}</p>
        </div>
        </React.Fragment>
    );
}

Coffee.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
    whenCoffeeClicked: PropTypes.func
}

export default Coffee;