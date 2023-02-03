import React, { useState } from 'react'
import doctor from '../Json/Card.json'
import Navbar from '../Navbar/Navbar'
export default function Doctors() {

    const [ data , setData] = useState([...doctor])
    const [rendering , setRendering] = useState([...doctor])

    function Serach(params) {
        console.log(params);
        let search = rendering.filter((val , i) => {
          return val.name.includes(params)
        })
        setData([...search])
        console.log(search);
      }

    return (
        <div>
            <div>
                    {/* <Navbar/> */}
                <h1 className='toph1' style={{ textAlign: "center" }}>Meet our specialist</h1><br />
                <div style={{textAlign:"center"}}>
                    <input className='drsearch' type="search" placeholder='Search doctors' onInput={(val)=> Serach(val.target.value)} />
                    {/* <button className='searchbtn' >Search</button> */}
                </div>
                <div className='cards'>
                    {
                        data.map((arr, index) => {
                            return (
                                <div className='cardmain shadow' key={index}>
                                    <img className='cardimg' src={arr.img} alt={arr.name} />
                                    <h2 className='cardh2'>{arr.name}</h2>
                                    <h3 className='cardh3'>{arr.profession}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
