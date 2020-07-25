import React, { useState } from 'react'
import Form, { TextInput, TextArea } from './formulate';

function App() {
  return (
    <div className='container'>
      <h2>Formulate</h2>
      <Form>
        <TextInput name='name' value='' className='input' />
        <TextInput name='email' value='' className='input' />
        <TextInput name='phone' value='' className='input' />
        <TextArea name='message' value='' className='input' />
      </Form>
    </div>
  );
}

export default App;
