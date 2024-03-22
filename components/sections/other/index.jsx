/**
 * components/sections/other.jsx
 */


import React from 'react'
import { OtherComponent } from './other'
import { Goes } from './goes'
import { Here } from './here'

export const Other = () => {


  return (
    <div id="other">
      <OtherComponent/>
      <Goes/>
      <Here/>
    </div>
    
  )
}