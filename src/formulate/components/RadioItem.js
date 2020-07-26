import React, { useContext } from 'react'
import { RadioContext } from '../context/RadioContext'
import { FormContext } from '../context/FormContext'

const RadioItem = ({ value, label }) => {
    const { onInputUpdate } = useContext(FormContext)
    const {  radioProps, setRadioValue } = useContext(RadioContext)

    const onInputSelect = e => {
        setRadioValue(e.target.value)
        onInputUpdate(radioProps.name, e.target.value)
    }

    return (
        <>
            <input 
                type='radio' 
                {...radioProps} 
                value={value} 
                onClick={onInputSelect} 
            />
            {label}
        </>
    )
}

export default RadioItem