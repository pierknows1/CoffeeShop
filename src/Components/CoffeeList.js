import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

    function CoffeeList(props) {
        return (
            <React.Fragment>
            {props.coffeeList.map((coffee) => (
                <Coffee
                    whenCoffeeClicked={props.onCoffeeSelection}
                    name={coffee.name}
                    description={coffee.description}
                    quantity={coffee.quantity}
                    price={coffee.price}
                    id={coffee.id}
                    key={coffee.id} />
                ))}
            </React.Fragment>
        );
    }
    
    CoffeeList.propTypes = {
        coffeeList: PropTypes.array,
        onCoffeeSelection: PropTypes.func,
    };
    
    export default CoffeeList;

