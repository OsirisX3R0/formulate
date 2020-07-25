import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../context/FormContext'

const TextArea = ({ name, value, className, onChange }) => {
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
        <textarea {...inputProps} value={inputValue} onChange={onValueChange}></textarea>
    )
}

export default TextArea