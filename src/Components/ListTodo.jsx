import React from 'react'

export default function ListTodo({ data = [] }) {
  return (
    <ul>
        {
            data.map((d, i) => <li key={i}>{d.title}</li>)
        }
    </ul>
  )
}
