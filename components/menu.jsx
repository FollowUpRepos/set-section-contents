/**
 * components/menu.jsx
 */


import React, { useContext } from 'react'
import { Context } from '../contexts/Context'



export const Menu = () => {
  const { section, setSection } = useContext(Context)

  const chooseSection = ({ target }) => {
    const id = target.id
    setSection(id)
  }

  const sectionNames = ["This", "That", "Other"]
  const sectionItems = sectionNames.map( name => {
    const className = (name === section) ? "selected" : ""
    return (<li
        key={name}
        className={className}
      >
        <button
          id={name}
        >
          {name}
        </button>
      </li>
    )
  })


  return (
    <ul
      onClick={chooseSection}
    >
      {sectionItems}
    </ul>
  )
}