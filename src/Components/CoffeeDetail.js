import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
    const { coffee } = props;

return (
    <React.Fragment>
        <h1>Coffee Details</h1>
        <p>Name: {coffee.name}</p>
        <p>Price: {coffee.price}</p>
        <p>Description: {coffee.description}</p>

    </React.Fragment>
);

}

export default CoffeeDetail;
