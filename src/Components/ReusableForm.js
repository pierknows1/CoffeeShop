import React from 'react';
import PropTypes from 'prop-types';

const ReusableForm = (props) => {
    return (
        <React.Fragment>
            <div>
            <form onSubmit = {props.formSubmission}>
                <input
                type='text'
                name='name'
                placeholder='Name' />
                <input 
                type='text'
                name='price'
                placeholder='Price' />
                <input
                type='number'
                name='quantity'
                placeholder='Quantity' />
                 <input
                type='number'
                name='description'
                placeholder='Description' />
                <button type='submit'>{props.buttonText}</button>
            </form>
            </div>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmission: PropTypes.func,
    buttonText: PropTypes.string
}
export default ReusableForm;