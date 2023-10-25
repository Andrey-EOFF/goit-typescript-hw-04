import React, { useState, ChangeEvent  } from 'react';

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
    <label htmlFor="inputField">Input Label</label>
    <input 
      type="text" 
      id="inputField" 
      aria-label="Input Label" 
      value={value} 
      onChange={handleChange} 
    />
  </div>
  );
}
