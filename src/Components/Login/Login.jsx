import React, { useState } from 'react'
import "./Login_Page.css"
import { useNavigate } from 'react-router-dom'

export default function Login_Page() {
  const [parol, setparol] = useState(null)
  const [active, setactive] = useState(true)
  const [name, setname] = useState(null)
  const navigate = useNavigate()
  let data = [
    {
      name: "Naimjon",
      password: 7714001,
      color: "white",
      border: "white"
    },
    {
      name: "Abdulloh",
      password: 1234,
      color: "white",
      border: "white"
    },
    {
      name: "Shoxhur",
      password: 123321123321,
      color: "white",
      border: "white"
    },
    {
      name: "Umarbek",
      password: 3009,
      color: "white",
      border: "white"
    }
  ]
  function checkpassword(val) {

    data.map((arr, index) => {
      if (arr.name == name && arr.password == parol) {
        navigate('/navbar')
        console.log("parol togri");
        setactive(true)
      }
      else {
        setactive(false)
      }
    })
  }

  return (
    <div className='Registration'>
      <div className="leftside">

      </div>
      <div className="Registr">
        <div className="Registration_form">
          <h1 className='wel'>Welcome!</h1>
          <div className='welcome_div'>
            <p className='username'>Username:</p>
            <input style={active ? { color: "black" } : { color: "red" }} onInput={(val) => {
              setname(val.target.value); if (name.length === 0 || parol.length === 0) {
                setactive(true)
              }
            }} className="input54" type="text" />
          </div>

          <div className='welcome_div1'>
            <p className='password'>Password:</p>
            <input style={active ? { color: "black" } : { color: "red" }} onInput={(val) => {
              setparol(val.target.value);
              if (name.length === 0 || parol.length === 0) {
                setactive(true)
              }
            }} className="input55" type="password" />
          </div>
          <button className='Kirish' onClick={(val) => { checkpassword(val) }}>Kirish</button>
        </div>
      </div>
    </div>
  )
}

