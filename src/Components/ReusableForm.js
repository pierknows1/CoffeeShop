import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit = {props.formSubmission}>
                <input
                type='text'
                name='name'
                placeholder='' />
                <button type='submit'>Submit</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmission: PropTypes.func,
    buttonText: PropTypes.string
};
export default ReusableForm;