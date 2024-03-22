/**
 * Context.jsx
 * description
 */

import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [ section, setSection ] = useState("This")

  return (
    <Context.Provider
      value ={{
        section,
        setSection
      }}
    >
      {children}
    </Context.Provider>
  )
}