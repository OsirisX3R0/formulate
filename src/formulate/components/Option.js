import React from 'react'

const Option = ({ value, children }) => (
    <option value={value} key={value}>{children}</option>
)

export default Option