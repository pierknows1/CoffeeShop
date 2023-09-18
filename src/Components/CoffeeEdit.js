import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const CoffeeEdit = (props) => {
    const { coffee } = props;

    function editCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onEditCoffee({
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
            id: coffee.id,
        });
    }

    return (
        <React.Fragment>
        <ReusableForm formSubmission={editCoffeeFormSubmission}
        buttonText="Update Coffee" />
        </React.Fragment>
    );
}

CoffeeEdit.propTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func,
};

export default CoffeeEdit;
