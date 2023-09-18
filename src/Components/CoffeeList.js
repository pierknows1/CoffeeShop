import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const mainCoffeeList = [
    {
        name: 'CoffeeOne',
        description: 'OneCoffee',
        quantity: 1,
        price: 1.11,
    },
]
    function CoffeeList(props) {
        return (
            <React.Fragment>
            {mainCoffeeList.map((coffee) =>
                <Coffee
                    whenCoffeeClicked={props.onCoffeeSelection}
                    name={coffee.name}
                    description={coffee.description}
                    quantity={coffee.quantity}
                    price={coffee.price}
                    id={coffee.id}
                    key={coffee.id} />
                )}
            </React.Fragment>
        );
    }
    
    CoffeeList.propTypes = {
        mainCoffeeList: PropTypes.array,
        onCoffeeSelection: PropTypes.func
    }
    
    export default CoffeeList;

