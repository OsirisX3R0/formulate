import React, { useState } from 'react'
import Form, { TextInput } from './formulate';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <div className='container'>
      <h2>Formulate</h2>
      <Form>
        <TextInput name='name' value={name} className='input' onChange={(e) => setName(e.target.value)} />
        <TextInput name='email' value={email} className='input' onChange={(e) => setEmail(e.target.value)} />
        <TextInput name='phone' value={phone} className='input' onChange={(e) => setPhone(e.target.value)} />
      </Form>
    </div>
  );
}

export default App;
