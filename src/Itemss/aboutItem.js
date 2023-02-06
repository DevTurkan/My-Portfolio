import React from 'react'

function Aboutitem(props) {
  return (
    <ul>
        <li>
            <span>{props.title}</span>
            {props.desc}
        </li>
    </ul>

  )
}

export default Aboutitem