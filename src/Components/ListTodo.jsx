import React from 'react'
import { Link } from 'react-router'

export default function ListTodo({ data = [] }) {
  return (
    <ul  className="list-group">
        {
            data.map((d, i) => <Link to={`/todo/${d.id}`}  key={i}><li className="list-group-item">{d.title}</li></Link>)
        }
    </ul>
  )
}
