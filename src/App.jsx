import { useState } from 'react'
import './App.css'
import contacts from './contacts.json'


function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0,5))
  
  function addRandom() {
    let notInFirstFive = contacts.filter(oneContact => {
      return !firstFive.includes(oneContact)
    })
    const randomPosition = Math.floor(Math.random() * notInFirstFive.length)
    const newContact = notInFirstFive[randomPosition]
    const newList = [...firstFive,newContact]
    console.log(newContact)
    setFirstFive(newList)
  }


  return (
  <div className='App images'>
    <h1>Iron Contacts</h1>
    <button onClick={() => 
      addRandom()}>Add Random Contact</button>
    <table>
      <thead>
        <tr>
          <th><h2>Pictures</h2></th>
          <th><h2>Name</h2></th>
          <th><h2>Popularity</h2></th>
          <th><h2>Won <br />Oscar</h2></th>
          <th><h2>Won <br />Grammy</h2></th>
        </tr>
      </thead>
      <tbody className='text'>
        {firstFive.map((oneContact) => (
          <tr>
            <td><img src={oneContact.pictureUrl} alt={oneContact.name}/></td>
            <td>{oneContact.name}</td>
            <td>{oneContact.popularity.toFixed(2)}</td>
          </tr>
         ))}
      </tbody>
    </table>
  </div>)
}
export default App