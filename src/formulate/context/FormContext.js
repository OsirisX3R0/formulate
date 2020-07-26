import React, { createContext, useState, useEffect } from 'react'

export const FormContext = createContext()

export const Form = ({ onSubmit, onFormChange, children }) => {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        if (formData !== undefined)
            onFormChange(formData)
    }, [formData])

    const onFormSubmit = e => {
        e.preventDefault()
        onSubmit(formData)
    }

    const onInputUpdate = (name, value) => {
        let updatedData = {
            ...formData,
            [name]: value
        }

        setFormData(updatedData)
    }

    return (
        <FormContext.Provider value={{
            formData,
            onInputUpdate
        }}> 
            <form onSubmit={onFormSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    )
}