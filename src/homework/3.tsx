import React, { ChangeEvent, useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label>
      Input text:
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}
