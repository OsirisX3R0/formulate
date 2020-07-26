import React, { createContext, useState, useContext, useEffect } from 'react'
import { FormContext } from './FormContext'

export const CheckContext = createContext()

export const CheckBoxGroup = ({ value, name, className, children }) => {
    const [checkValue, setCheckValue] = useState([])
    const [checkProps, setCheckProps] = useState({ className })

    useEffect(() => {
        if (value !== undefined)
        setCheckValue(value)
    }, [value])

    return (
        <CheckContext.Provider value={{
            checkValue,
            checkProps,
            setCheckValue,
            name
        }}>
            {children}
        </CheckContext.Provider>
    )
}