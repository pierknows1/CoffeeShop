import React from "react";
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function CoffeeForm (props){
    function newCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
        });
    }

    return (
        <React.Fragment>
            <ReusableForm formSubmission={newCoffeeFormSubmission}
            buttonText="Add" />
        </React.Fragment>
    );
}

CoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
};

export default CoffeeForm;
