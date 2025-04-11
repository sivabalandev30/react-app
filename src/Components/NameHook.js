import React, { useState } from 'react'

function NameHook() {
    const [name, setName] = useState({fname: '', lname: ''});

  return (
    <div>
        <input value={name.fname}  onChange={e=> setName({...name, fname: e.target.value})}/>
        <input value={name.lname}  onChange={e=> setName({...name, lname: e.target.value})}/>
      <p>fname is {name.fname}</p>
      <p>lname is {name.lname}</p>
    </div>
  )
}

export default NameHook;
