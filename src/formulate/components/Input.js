import React, { useContext, useState, useEffect, useRef } from 'react'
import { FormContext } from '../context/FormContext'
import setInputValidity from '../helpers/setInputValidity'
//{ type, name, value, className, validate, onChange }
const Input = (props) => {
    let { validate, onChange, ...inputProps} = props
    validate = validate || {}
    let { required, pattern, min, max, minLength, maxLength, ...customValidators } = validate
    let validators = { required, pattern, min, max, minLength, maxLength }
    const { onInputUpdate, onValidityCheck } = useContext(FormContext)
    const [inputValue, setInputValue] = useState(props.type === 'color' ? '#666666' : '')
    const [valid, setValid] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        setInputValidity(inputRef.current)
    }, [])

    useEffect(() => {
        if(props.value !== undefined)
            setInputValue(props.value)
    }, [props.value])

    useEffect(() => {
        setInputValidity(inputRef.current)
        onValidityCheck(props.name, inputRef.current.validity.valid)
    }, [inputValue, props.name, onValidityCheck])

    // useEffect(() => {
    //     if (validators !== undefined) {
    //         registerValidator(name, validate)
    //         // setValidators(prevValidators => ([
    //         //     ...prevValidators,
    //         //     { name, validator: validate}
    //         // ]))
    //     }
    // }, [validators])

    const onValueChange = e => {
        let { name, value } = e.target

        if (onChange) onChange(e)
        setInputValue(value)
        onInputUpdate(name, value)
    }

    return (
        <input {...inputProps} {...validators} value={inputValue} onChange={onValueChange} ref={inputRef} />
    )
}

export default Input