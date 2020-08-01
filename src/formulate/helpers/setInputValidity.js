const setInputValidity = input => {
    if(input.validity) {
        if (input.validity.valueMissing) {
            input.setCustomValidity(`The value for ${input.name} is required.`)
        } else if (input.validity.typeMismatch) {
            input.setCustomValidity(`The value for ${input.name} must be type ${input.type}.`)
        } else if (input.validity.patternMismatch) {
            input.setCustomValidity(`The value for ${input.name} must match the pattern ${input.pattern}.`)
        } else if (input.validity.rangeUnderflow) {
            input.setCustomValidity(`The value for ${input.name} must be greater than ${input.min}.`)
        } else if (input.validity.rangeOverflow) {
            input.setCustomValidity(`The value for ${input.name} should be less than ${input.max}.`)
        } else if (input.validity.tooShort) {
            input.setCustomValidity(`The value for ${input.name} should be longer than ${input.minLength} characters.`)
        } else if (input.validity.tooLong) {
            input.setCustomValidity(`The value for ${input.name} should be shorter than ${input.maxLength} characters.`)
        } else {
            input.setCustomValidity("")
        }
    }
}

export default setInputValidity