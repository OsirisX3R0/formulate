import React, { createContext, useState } from 'react'

export const FormContext = createContext()

export const Form = ({ onSubmit, children }) => {
    const [formData, setFormData] = useState({})

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