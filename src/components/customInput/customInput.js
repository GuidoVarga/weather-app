import React from 'react';
//import classNames from 'classNames'

const CustomInput = (props) => {

    const inputClass = classNames(`${props.className} input-text-default`,
    {'input-error' : props.error});

    const inputProps = {
      ...props,
      className: inputClass
    }

    return (
        <input {...inputProps}/>
    );
}
export default CustomInput;