import React from 'react'

export default function TextInput({ id, label, placeholder, value, onChange }) {
  return (
    <div  className="mb-3">
        <label htmlFor={id}  className="form-label">{label}</label><br/>
        <input className="form-control" id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}
