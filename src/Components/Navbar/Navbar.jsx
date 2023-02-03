import React from 'react'
import '../Css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Link} from 'react-dom'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <div>

                <div className='container'>
                    <div className='row' style={{ marginTop: "50px" }}>
                        <div className='col-6'>
                            <div style={{ marginTop: "105px" }}>
                                <h1 className='h1' style={{ marginTop: "60px" }}>Feel better about <br /> fingding healthcare</h1>
                                <p style={{ color: "darkblue", marginLeft: "30px", marginTop: "30px" }}>At Healthgrades, we take the guesswork out of finding the <br /> right doctors, hospital, and your family.</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img className='img' src="./images/what-doctors-say2.jpg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text_wecane'> Popular Searches on Wecare</h1>
                        <div className='main_div'>
                            <Link to={'/Internalmedicine/Dermotology'} style={{textDecoration:"none" ,color:"black"}}>
                                <div className='dives'>
                                    <div style={{ textAlign: "center" }}>
                                        <img className='logo_div' src="./images/dermo.jpg" alt="" />
                                        <p style={{ marginTop: "10px" }}>Dermotology</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/Internalmedicine/Internal medicine' style={{textDecoration:"none" ,color:"black"}}>
                                <div className='dives'>
                                    <div style={{ textAlign: "center" }}>
                                        <img className='logo_div' src="./images/leg.webp" alt="" />
                                        <p style={{ marginTop: "10px" }}>Internal medicine</p>
                                    </div>
                                </div>
                            </Link>

                            <Link to={'/Internalmedicine/Psycology'} style={{textDecoration:"none" ,color:"black"}}>
                                <div className='dives'>
                                    <div style={{ textAlign: "center" }}>
                                        <img className='logo_div' src="./images/brain.png" alt="" />
                                        <p style={{ marginTop: "10px" }}>Psycology</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/Internalmedicine/Main medicine'} style={{textDecoration:"none" ,color:"black"}}>
                                <div className='dives'>
                                    <div style={{ textAlign: "center" }}>
                                        <img className='logo_div' src="./images/plus.png" alt="" />
                                        <p style={{ marginTop: "10px" }}>Main medicine</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/Internalmedicine/Dentist'} style={{textDecoration:"none" ,color:"black"}}>
                                <div className='dives'>
                                    <div style={{ textAlign: "center" }}>
                                        <img className='logo_div' src="./images/tooth.jpg" alt="" />
                                        <p style={{ marginTop: "10px" }}>Dentist</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/Internalmedicine/Onteronology'} style={{textDecoration:"none" ,color:"black"}}>
                                <div className='dives'>
                                    <div style={{ textAlign: "center" }}>
                                        <img className='logo_div' src="./images/nose.jfif" alt="" />
                                        <p style={{ marginTop: "10px" }}>Onteronology</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: "105px" }}>
                        <div className="col-6">
                            <div style={{ marginTop: "105px" }}>
                                <h1 className='h1'>Find the right doctor <br /> right at your fingertips</h1>
                                <p style={{ color: "darkblue", marginLeft: "30px" }}>Wecare gives you the tools and information you need to </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className='img' src="./images/lechenie-narkomanii-v-korenovske.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.3974477325064!2d69.21875501051542!3d41.287655603406755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f5a84b25f%3A0xf934f004dd798141!2sSoff%20Study%20zamonaviy%20kasblar%20markazi!5e1!3m2!1sru!2s!4v1671306974197!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>
        </div>
    )
}
// onInput={(val) => { setSearchval(val.target.value) }}
// onClick={() => searchDr()}