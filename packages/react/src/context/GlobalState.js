import React, { useCallback, useMemo, useState } from 'react'

const initialState = {}

export const GlobalContext = React.createContext(initialState)

const GlobalState = ({
  autoPlay,
  children,
  controls,
  loop,
  mediaRef,
  muted,
  playsInline,
  size,
  ...rest
}) => {
  const [state, setState] = useState(initialState)

  const updateState = useCallback(
    newState => setState(currentState => ({ ...currentState, ...newState })),
    []
  )

  const props = useMemo(
    () => ({
      autoPlay,
      controls,
      loop,
      mediaRef,
      muted,
      playsInline,
      size
    }),
    [autoPlay, controls, loop, mediaRef, muted, playsInline, size]
  )

  const values = useMemo(
    () => ({
      props,
      state,
      updateState
    }),
    [props, state, updateState]
  )

  return (
    <GlobalContext.Provider value={values}>
      {children(rest)}
    </GlobalContext.Provider>
  )
}

export default GlobalState
