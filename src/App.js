import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState('Value');
  const changeFunction = (e) => {
    console.log('ee', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <InputComponent changeFunction={changeFunction} />
      <OutputComponent outpusadt={value} />
    </div>
  );
}

const InputComponent = ({ value, changeFunction }) => {
  return <input type="text" value={value} onChange={changeFunction} />;
};

const OutputComponent = ({ output }) => {
  return <p>{output}</p>;
};
