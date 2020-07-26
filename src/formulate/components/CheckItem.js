import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import { CheckContext } from '../context/CheckContext'

const CheckItem = ({ label }) => {
    const { onInputUpdate } = useContext(FormContext)
    const { checkProps, checkValue, setCheckValue, name } = useContext(CheckContext)

    const onInputSelect = e => {
        let { name, checked } = e.target

        let updatedValue = checked
            ? [...checkValue, label]
            : [...checkValue.filter(v => v !== label)]

        setCheckValue(updatedValue)
        onInputUpdate(name, updatedValue)
    }

    return (
        <span {...checkProps} >
            <input 
                type='checkbox' 
                name={name}
                checked={checkValue.some(v => v === label)} 
                onChange={onInputSelect} 
            />
            {label}
        </span>
    )
}

export default CheckItem