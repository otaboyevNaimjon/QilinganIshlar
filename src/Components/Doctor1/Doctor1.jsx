import React, { useEffect, useState } from 'react'
import doctor1 from '../Json/doctor1.json'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Doctor1() {
    let params = useParams()
    console.log(params.query);
    const [doctor, setDoctor] = useState([...doctor1])
    useEffect(() => {
        let result = doctor.filter((arr) => {
            return arr.lovozimi === params.query
        })
        setDoctor([...result])
    }, []);
    const navigate = useNavigate()
    return (
        <div>
            <h1 className='our' >Our Doctors</h1>
            {
                (doctor.length > 0) ?
                    <div className='cards'>
                        {
                            doctor.map((arr, index) => {
                                return (
                                    <Link to={'/ochirit'} style={{ textDecoration: "none" }}>
                                        <div key={index} className='cardmain shadow'>
                                            <img className='cardimg' src={arr.rasm} alt={arr.name} />
                                            <h2 className='cardh2' >{arr.name}</h2>
                                            <h3 className='cardh3' >{arr.lovozimi}</h3>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    :
                    <div>
                        {/* <h1> <CircularProgress /></h1> */}
                    </div>
            }
        </div>
    )
}

