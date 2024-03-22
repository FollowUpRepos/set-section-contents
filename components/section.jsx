/**
 * components/section.jsx
 */


import React, { useContext } from 'react'
import { Context } from '../contexts/Context'

import { This, That, Other } from '../components/sections'
console.log("This:", This);

const sections = {
  This,
  That,
  Other
}


export const Section = () => {
  const { section } = useContext(Context)
  console.log("section:", section);
  

  const SectionToShow = sections[section]


  return (
    <div id="section">
      <SectionToShow/>
    </div>
  )
}