// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

const App = () => {
  return (
    <Toggle>
      <ToggleOn>Toggle is On</ToggleOn>
      <ToggleOff>Toggle is off</ToggleOff>
      <ToggleButton />
    </Toggle>
  )
}

const Toggle = ({children}) => {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
}

const ToggleOn = ({on, children}) => on ? children : null;
const ToggleOff = ({on, children}) => on ? null : children;

const ToggleButton = ({toggle, on}) => {
  return <Switch onClick={toggle} on={on} /> 
}


export default App

/*
eslint
  no-unused-vars: "off",
*/
