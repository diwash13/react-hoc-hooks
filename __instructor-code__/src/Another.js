import React from 'react';
import hoc from './Hoc'

function Another(props) {
  console.log(props)
  return (
    <div style={{ color: props.color }} onMouseEnter={props.toggle} onMouseLeave={props.toggle}>
      {props.bool ? 'Hey there' : 'whoa dont touch me'}
    </div>
  )
}

export default hoc(Another)