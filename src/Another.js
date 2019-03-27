import React from 'react';
import hoc from './Hoc'

function Another(props) {
  return (
    <div onMouseEnter={props.toggle} onMouseLeave={props.toggle}>
      {props.bool ? 'Hey there' : 'whoa dont touch me'}
    </div>
  )
}

export default hoc(Another)