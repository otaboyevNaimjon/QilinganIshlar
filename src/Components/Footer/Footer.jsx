import React from 'react'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { TbPhoneCalling } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
export default function Footer() {
  return (
    <div>
        <div id='footer' className="footer">
                    <div className="padge1">
                        <div className="lorem">
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                                <img style={{ width: "60px", height: "60px", borderRadius: "50%", marginLeft: "-60px" }} src="./images/photo_2022-06-14_11-41-26.jpg" alt="" />
                                <h2>Soff Hospital</h2>
                            </div>
                            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing  <br /> elit. Nulla dolores nostrum perferendis cumque libero  <br /> fugiat aliquame  consectetur exercitationem magnam, <br /> reprehenderit sint vero dignissimos deserunt, aut voluptates.</p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "120px" }}>
                                <a href="https://www.instagram.com/na1mjon_0406/"> <IoLogoInstagram style={{ fontSize: "25px" }} /></a>
                                <a href="https://www.facebook.com/getting_started/"><FaFacebook style={{ fontSize: "25px" }} /></a>
                                <a href="https://t.me/naimjon_0406"> <BsTelegram style={{ fontSize: "25px" }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="padge2">
                        <div className="link">
                            <h3 className='h'>About</h3>
                            <h5 className='h'>Company</h5>
                            <h5 className='h'>Tour</h5>
                            <h5 className='h'>FAQs</h5>
                        </div>
                    </div>
                    <div className="padge3">
                        <div className="contact">
                            <h3>Contact us</h3>
                            <h5 className='h'> <MdOutlineMarkEmailUnread /> Soff Hospital.org</h5>
                            <h5 className='h'> <TbPhoneCalling /> (98)-771-40-01</h5>
                            <a style={{ textDecoration: "none", color: "white" }} href="https://mail.google.com/mail/u/0/#inbox"> <h5> <MdOutlineAlternateEmail /> NaimjonOtaboyev</h5></a>
                        </div>
                    </div>
                    <div className="padge4">
                        <div className="email">
                            <h3 >Sing up for updates</h3>
                            <input placeholder='Email' className='in' type="email" />
                        </div>
                        <button className='btn btn-primary'>SUBSCRIDE</button>
                    </div>
                </div>
    </div>
  )
}
