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
            {mainCoffeeList.map((coffee, index) =>
                <Coffee
                    name={coffee.name}
                    description={coffee.description}
                    quantity={coffee.quantity}
                    price={coffee.price}
                    key={index} />
                )}
    
            {props.mainCoffeeList.map((coffee, index) =>
                <Coffee
                    name={coffee.name}
                    description={coffee.description}
                    quantity={coffee.quantity}
                    price={coffee.price}
                    key={index} />
                )}
            </React.Fragment>
        );
    }
    
    CoffeeList.propTypes = {
        mainCoffeeList: PropTypes.array
    }
    
    export default CoffeeList;

