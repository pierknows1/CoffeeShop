import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const EditCoffeeForm = (props) => {
    const { coffee } = props;


    function EditCoffeeFormSubmission(event)
    {
        event.preventDefault();
        props.EditCoffeeForm();
        props.onEditCoffee({
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            id: coffee.id,
        });
    }

    return (
        <ReusableForm formSubmission={EditCoffeeForm}
        buttonText="Update Coffee" />
    );
}

EditCoffeeForm.PropTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;
