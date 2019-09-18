import React from 'react';
import classNames from 'classnames'

const CustomInput = (props) => {

    const buildErrorMessage = (message, inputClass) => {
        return (
            <div className={`${inputClass}__error input-text-default__error`}>
                {message}
            </div>
        );
    }

    const inputClass = classNames(`${props.className} input-text-default`,{
        'input-error' : props.error
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
    error: true,
    errorMessage: 'error'
}

export default CustomInput;