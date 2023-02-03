import React from 'react'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { TbPhoneCalling } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
export default function About() {
  return (
    <div>
      <h1 className='our' >Our developers</h1>
      <div className='kards'>
        <div className='kard'>
          <img style={{ marginLeft: "15px" }} className='kardimg' src="./images/photo1671351495.jpeg" alt="" />
          <h2 className='kardh2'>Naimjon</h2>
          <h3 className='kardh2' style={{marginTop:"5px"}}>Front-end</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <a href="https://www.instagram.com/na1mjon_0406/"> <IoLogoInstagram style={{ fontSize: "25px" }} /></a>
            <a href="https://www.facebook.com/getting_started/"><FaFacebook style={{ fontSize: "25px" }} /></a>
            <a href="https://t.me/naimjon_0406"> <BsTelegram style={{ fontSize: "25px" }} /></a>
          </div>
        </div>
        <div className='kard'>
          <img style={{ marginLeft: "15px" }} className='kardimg' src="images/photo1671351052.jpeg" alt="" />
          <h2 className='kardh2'>Abdulloh</h2>
          <h3 className='kardh2' style={{marginTop:"5px"}}>Lider</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <a href=""> <IoLogoInstagram style={{ fontSize: "25px" }} /></a>
            <a href=""><FaFacebook style={{ fontSize: "25px" }} /></a>
            <a href="https://t.me/naimjon_0406"> <BsTelegram style={{ fontSize: "25px" }} /></a>
          </div>
        </div>
        <div className='kard'>
          <img style={{ marginLeft: "15px" }} className='kardimg' src="images/photo_2022-02-15_20-49-29.jpg" alt="" />
          <h2 className='kardh2'>Umarjon</h2>
          <h3 className='kardh2' style={{marginTop:"5px"}}>Dizayner</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <a href="https://www.instagram.com/the.real.tonix/"> <IoLogoInstagram style={{ fontSize: "25px" }} /></a>
            <a href=""><FaFacebook style={{ fontSize: "25px" }} /></a>
            <a href="https://t.me/ne_oqivos_oka"> <BsTelegram style={{ fontSize: "25px" }} /></a>
          </div>
        </div>
        <div className='kard'>
          <img style={{ marginLeft: "15px" }} className='kardimgg' src="images/photo1671351498.jpeg" alt="" />
          <h2 className='kardh2'>Shoxrux</h2>
          <h3 className='kardh2' style={{marginTop:"5px"}}>Front-end</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <a href=""> <IoLogoInstagram style={{ fontSize: "25px" }} /></a>
            <a href=""><FaFacebook style={{ fontSize: "25px" }} /></a>
            <a href="https://t.me/Bakhromoff_w"> <BsTelegram style={{ fontSize: "25px" }} /></a>
          </div>
        </div>
        <div className='kard'>
          <img style={{ marginLeft: "15px" }} className='kardimg' src="images/photo1671351920.jpeg" alt="" />
          <h2 className='kardh2'>Diyorbek</h2>
          <h3 className='kardh2' style={{marginTop:"5px"}}>Dizeyner</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <a href="https://www.instagram.com/diyor.70l/"> <IoLogoInstagram style={{ fontSize: "25px" }} /></a>
            <a href=""><FaFacebook style={{ fontSize: "25px" }} /></a>
            <a href="https://t.me/diyorbadalov"> <BsTelegram style={{ fontSize: "25px" }} /></a>
          </div>
        </div>
      </div>
        <div>
          <h1 className='our'>About the site</h1>
          <p className='our'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, <br /> alias tempora recusandae illo impedit delectus exercitationem, animi sunt, quae suscipit <br /> nemo nisi aliquam? Tempora unde, consequatur dolorum repudiandae dolores distinctio! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cupiditate quo perferendis ea dolor sapiente? A nostrum dicta labore tempora <br /> eius. Voluptas, eveniet amet. Quibusdam amet ipsam quas molestiae! Quisquam, nisi! </p>
        </div>
    </div>
  )
}
