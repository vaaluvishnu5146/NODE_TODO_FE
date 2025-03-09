import React from 'react'

export default function TextArea({id, label, placeholder, value, onChange}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <textarea className="form-control" id={id} rows="3" placeholder={placeholder} value={value} onChange={onChange}></textarea>
    </div>
  )
}
