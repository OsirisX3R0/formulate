import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../context/FormContext'

const TextInput = ({ name, value, className, onChange }) => {
    let inputProps = { name, value, className }
    const { onInputUpdate } = useContext(FormContext)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const onValueChange = e => {
        let { name, value } = e.target

        if (onChange) onChange(e)
        setInputValue(value)
        onInputUpdate(name, value)
    }

    return (
        <input type='text' {...inputProps} value={inputValue} onChange={onValueChange} />
    )
}

export default TextInput