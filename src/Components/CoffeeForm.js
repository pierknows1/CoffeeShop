import React from "react";
import PropTypes from "prop-types";

const CoffeeForm = (props) => {
    function newCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
        });
    }

    CoffeeForm.propTypes = {
        onNewCoffeeCreation: PropTypes.func
    };

    return (
        <React.Fragment>
            <form onSubmit={newCoffeeFormSubmission}>
                <input
                type='text'
                name='names'
                placeholder='coffee Name' />
            <button type='submit'>Submit!</button>
            </form>
        </React.Fragment>
    );
}

export default CoffeeForm;
