import React, { useState } from 'react'

const initialState = {}

export const GlobalContext = React.createContext(initialState)

const GlobalState = ({
  autoPlay,
  children,
  controls,
  loop,
  muted,
  playsInline,
  size,
  ...props
}) => {
  const [state, setState] = useState(initialState)

  const updateState = newState =>
    setState(currentState => ({ ...currentState, ...newState }))

  return (
    <GlobalContext.Provider
      value={{
        state,
        props: {
          autoPlay,
          controls,
          loop,
          muted,
          playsInline,
          size
        },
        updateState
      }}
    >
      {children(props)}
    </GlobalContext.Provider>
  )
}

export default GlobalState
