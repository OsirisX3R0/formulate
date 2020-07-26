import React, { useState } from 'react'
import Form, { TextInput, TextArea, SelectInput } from './formulate';

function App() {
  const [options, setOptions] = useState([
    { value: 1, text: 'Option One' },
    { value: 2, text: 'Option Two' },
    { value: 3, text: 'Option Three' },
    { value: 4, text: 'Option Four' },
    { value: 5, text: 'Option Five' }
  ])
  return (
    <div className='container'>
      <h2>Formulate</h2>
      <Form onSubmit={data => console.log(data)}>
        <TextInput type='text' name='name' value='' className='input' />
        <TextInput type='text' name='email' value='' className='input' />
        <TextInput type='number' name='phone' value='' className='input' />
        <TextInput type='date' name='date' value='' className='input' />
        <TextInput type='color' name='color' value='#666666' className='input' />
        <TextArea name='message' value='' className='input' />
        <SelectInput name='option' options={options} className='input' />
        <SelectInput name='options' options={options} className='input' multiple />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
}

export default App;
