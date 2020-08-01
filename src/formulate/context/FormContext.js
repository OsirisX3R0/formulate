import React, { createContext, useState, useEffect, useCallback } from 'react'

export const FormContext = createContext()

export const Form = (props) => {
    const { onSubmit, onFormChange, validateOnSubmit, children, ...formProps } = props
    const [formData, setFormData] = useState({})
    // const [validators, setValidators] = useState([])
    //const [errors, setErrors] = useState({})
    const [validState, setValidState] = useState({})
    const [validateFormOnSubmit, setValidateFormOnSubmit] = useState(validateOnSubmit !== undefined ? validateOnSubmit : true)

    useEffect(() => {
        if (formData !== undefined)
            onFormChange(formData)
    }, [formData, onFormChange])

    const onFormSubmit = e => {
        e.preventDefault()
        onSubmit(formData)
    }

    const onInputUpdate = useCallback((name, value) => {
        setFormData(prevFormDate => ({
            ...prevFormDate,
            [name]: value
        }))
    }, [])

    const checkValidity = useCallback(name => {
        return validState[name]
    }, [validState])

    const onValidityCheck = useCallback((name, value) => {
        setValidState(prevValidState => ({
            ...prevValidState,
            [name]: value
        }))
    }, [])

    // const registerValidator = (name, validators) => {
    //     setValidators(prevValidators => ({
    //         ...prevValidators,
    //         [name]: { validators }
    //     }))
    // }

    return (
        <FormContext.Provider value={{
            formData,
            onInputUpdate,
            checkValidity,
            onValidityCheck,
            //setValidators,
            //registerValidator
        }}> 
            <form {...formProps} onSubmit={onFormSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    )
}