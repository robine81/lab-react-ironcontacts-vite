import React from 'react'

function Contacts() {
  return (
    <div> <tr>
    <td><img src={firstFive[0].pictureUrl} alt={firstFive[0].name}/></td>
    <td>{firstFive[0].name}</td>
    <td>{firstFive[0].popularity.toFixed(2)}</td>
  </tr></div>
  )
}

export default Contacts