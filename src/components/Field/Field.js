import React from "react";

export default function input(props) {
  const { label, type, placeholder, onChange, value } = props;
  return (
    <div>
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
