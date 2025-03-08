import React from 'react'

export default function TextInput({ id, label, placeholder, value, onChange }) {
  return (
    <div>
        <label htmlFor={id}>{label}</label><br/>
        <input id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}
