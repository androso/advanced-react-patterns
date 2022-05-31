// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

const callAllFunctions = (...fns) => {
  return (...args) => {
    return fns.forEach(fn => fn(...args))
  }
}

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const getTogglerProps = ({onClick, ...props} = {}) => {
    return {
      'aria-pressed': on,
      onClick: callAllFunctions(toggle, onClick, () =>
        console.log('random function'),
      ),
      ...props,
    }
  }
  return {
    on,
    toggle,
    togglerProps: {'aria-pressed': on, onClick: toggle},
    getTogglerProps,
  }
}

function App() {
  const {on, togglerProps, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch on={on} {...togglerProps} />
      <hr />
      <button
        aria-label="custom-button"
        {...getTogglerProps({
          onClick: () => console.info('onButtonClick'),
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
