import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../context/FormContext'

const SelectInput = ({ type, name, value, className, multiple, onChange, options }) => {
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

    const selectOptions = options && options.map(o => (
        <option value={o.value} key={o.value}>{o.text}</option>
    ))

    return (
        <select {...inputProps} value={inputValue} onChange={onValueChange}>
            {selectOptions}
        </select>
    )
}

export default SelectInput