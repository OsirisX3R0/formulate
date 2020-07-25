import React, { useContext, useState, useEffect } from 'react'
import { FormContext } from '../context/FormContext'

const SelectInput = ({ type, name, value, className, onChange, options }) => {
    let inputProps = { type, name, value, className }
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