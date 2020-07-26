import React, { createContext, useContext, useState, useEffect } from 'react'
import { FormContext } from './FormContext'

export const SelectContext = createContext()

export const SelectInput = ({ type, name, value, className, multiple, onChange, children }) => {
    let inputProps = { type, name, value, className, multiple }
    const { onInputUpdate } = useContext(FormContext)
    const [inputValue, setInputValue] = useState(multiple ? [] : '')

    useEffect(() => {
        if(value !== undefined)
            setInputValue(value)
    }, [value])

    const onValueChange = e => {
        let selected = inputValue
        let { name, value } = e.target
        let newValue = multiple 
            ? inputValue.some(v => v === value)
                ? [...selected.filter(v => v !== value)]
                : [...selected, value] 
            : value
        if (onChange) onChange(e)
        setInputValue(newValue)
        onInputUpdate(name, newValue)
    }

    return (
        <select {...inputProps} value={inputValue} onChange={onValueChange}>
            {children}
        </select>
    )
}