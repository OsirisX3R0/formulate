import React, { useState } from 'react'
import Form, { Input, TextArea, SelectInput, RadioGroup, RadioItem, CheckBoxGroup, CheckBox, CheckItem, Option } from './formulate';

function App() {
  const [testData, setTestData] = useState({})
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
      <Form 
        onSubmit={data => console.log(data)}
        onFormChange={data => setTestData(data)}
      >
        <Input type='text' name='name' className='input' />
        <Input type='text' name='email' className='input' />
        <Input type='number' name='phone' className='input' />
        <Input type='date' name='date' className='input' />
        <Input type='color' name='color' value='#666666' className='input' />
        <TextArea name='message' className='input' />
        <SelectInput name='option' className='input'>
          {options.map(o => (
            <Option value={o.value} key={o.value}>{o.text}</Option>
          ))}
        </SelectInput>
        <SelectInput name='options' className='input' multiple>
          {options.map(o => (
            <Option value={o.value} key={o.value}>{o.text}</Option>
          ))}
        </SelectInput>
        <RadioGroup name='smoker' className='check'>
          <RadioItem value='Yes' label='Yes' />
          <RadioItem value='No' label='No' />
        </RadioGroup>
        <CheckBox name='isOver18' label='Over 18?' className='check' />
        <CheckBoxGroup name='snack' className='check'>
          <CheckItem label='Chicken' />
          <CheckItem label='Tacos' />
          <CheckItem label='Pizza' />
          <CheckItem label='Nachos' />
        </CheckBoxGroup>
        <Input type='file' name='file' className='input' />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
}

export default App;
