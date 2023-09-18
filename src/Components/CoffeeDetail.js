import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
    const { coffee } = props;

return (
    <React.Fragment>
        <h1>Coffee Details</h1>
        <p>Name: {coffee.name}</p>
        <p>Price: {coffee.price}</p>
        <p>Description: {coffee.description}</p>
        <p>Quantity: {coffee.quantity}</p>

        <button onClick={props.onClickEdit}>Update Coffee</button>
    </React.Fragment>
    );
}

CoffeeDetails.propTypes = {
    coffee: PropTypes.object,
    onClickEdit: PropTypes.func,
};

export default CoffeeDetails;
