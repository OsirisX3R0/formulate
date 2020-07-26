import React, { createContext, useState, useContext, useEffect } from 'react'
import { FormContext } from './FormContext'

export const RadioContext = createContext()

export const RadioGroup = ({ name, value, className, children }) => {
    //const { onInputUpdate } = useContext(FormContext)
    const [radioValue, setRadioValue] = useState(null)
    const [radioProps, setRadioProps] = useState({ name, className })

    useEffect(() => {
        if(value !== undefined)
            setRadioValue(value)
    }, [value])

    // useEffect(() => {
    //     if (radioValue)
    //         onInputUpdate(name, radioValue)
    // }, [onInputUpdate, name, radioValue])

    return (
        <RadioContext.Provider value={{
            radioProps,
            setRadioValue
        }}>
            {children}
        </RadioContext.Provider>
    )
}