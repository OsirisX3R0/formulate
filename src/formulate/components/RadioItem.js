import React, { useContext } from 'react'
import { RadioContext } from '../context/RadioContext'
import { FormContext } from '../context/FormContext'

const RadioItem = ({ value, label }) => {
    const { onInputUpdate } = useContext(FormContext)
    const {  radioProps, setRadioValue } = useContext(RadioContext)
    const { name, className } = radioProps
    const onInputSelect = e => {
        setRadioValue(e.target.value)
        onInputUpdate(radioProps.name, e.target.value)
    }

    return (
        <span className={className}>
            <input 
                type='radio' 
                name={name} 
                value={value} 
                onClick={onInputSelect} 
            />
            {label}
        </span>
    )
}

export default RadioItem