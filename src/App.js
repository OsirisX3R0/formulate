import React, { useState } from 'react'
import Form, { TextInput, TextArea } from './formulate';

function App() {
  return (
    <div className='container'>
      <h2>Formulate</h2>
      <Form onSubmit={data => console.log(data)}>
        <TextInput type='text' name='name' value='' className='input' />
        <TextInput type='text' name='email' value='' className='input' />
        <TextInput type='number' name='phone' value='' className='input' />
        <TextInput type='date' name='date' value='' className='input' />
        <TextInput type='color' name='color' value='' className='input' />
        <TextArea name='message' value='' className='input' />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
}

export default App;
