import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../context/FormContext'

const TextInput = ({ type, name, value, className, onChange }) => {
    let inputProps = { type, name, value, className }
    const { onInputUpdate } = useContext(FormContext)
    const [inputValue, setInputValue] = useState(type === 'color' ? '#666666' : '')

    useEffect(() => {
        if(value !== undefined)
            setInputValue(value)
    }, [value])

    const onValueChange = e => {
        let { name, value } = e.target

        if (onChange) onChange(e)
        setInputValue(value)
        onInputUpdate(name, value)
    }

    return (
        <input {...inputProps} value={inputValue} onChange={onValueChange} />
    )
}

export default TextInput