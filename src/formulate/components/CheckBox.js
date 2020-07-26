import React, { useContext, useState } from 'react'
import { FormContext } from '../context/FormContext'
import { CheckContext } from '../context/CheckContext'

const CheckBox = ({ name, label, className }) => {
    const { onInputUpdate } = useContext(FormContext)
    const [checkValue, setCheckValue] = useState(false)

    const onInputSelect = e => {
        let { name, checked } = e.target

        setCheckValue(checked)
        onInputUpdate(name, checked)
    }

    return (
        <span className={className} >
            <input 
                type='checkbox' 
                name={name}
                checked={checkValue} 
                onChange={onInputSelect} 
            />
            {label}
        </span>
    )
}

export default CheckBox