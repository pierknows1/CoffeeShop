import React from 'react';
import PropTypes from 'prop-types';

const ReusableForm = (props) => {
    return (
        <React-Fragment>
            <form onSubmit = {props.formSubmission}>
                <input
                type='text'
                name='name'
                placeholder='' />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React-Fragment>
    )
}

ReusableForm.propTypes = {
    formSubmission: PropTypes.func,
    buttonText: PropTypes.string
}
export default ReusableForm;