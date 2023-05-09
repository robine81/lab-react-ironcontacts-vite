import React from 'react'
import { useState } from 'react'
import contacts from '../contacts.json'

function RandomButton({contacts}) {
const randomNumber = 4
const [firstFive, setFirstFive] = useState(contacts.slice(randomNumber,1))
  
    return (
    <button>Add Random Contact</button>
  )
}

export default RandomButton