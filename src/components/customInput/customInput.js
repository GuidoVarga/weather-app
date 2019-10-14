import React from 'react';
import classNames from 'classnames'
import './customInput.scss'

const CustomInput = props => {

    const buildErrorMessage = (message, inputClass) => {
        return (
            <div className={`${inputClass}__error-message custom-input__error-message`}>
                {message}
            </div>
        );
    }

    const inputClass = classNames(`${props.className} custom-input`,{
        'custom-input--error' : props.error
    });

    const errorMessage = props.error ? buildErrorMessage(props.errorMessage, inputClass) : null;

    const inputProps = {
        ...props,
        className: inputClass
    }

    return (
        <div>
            <input {...inputProps}/>
            {errorMessage}
        </div>
    );
}

CustomInput.defaultProps = {
    error: false,
    errorMessage: ''
}

export default CustomInput;