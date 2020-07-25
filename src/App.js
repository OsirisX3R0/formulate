import React, { useState } from 'react'
import Form, { TextInput } from './formulate';

function App() {
  const [test, setTest] = useState('test')
  return (
    <div className='container'>
      <h2>Formulate</h2>
      <Form>
        <TextInput name='test' value={test} />
      </Form>
    </div>
  );
}

export default App;
