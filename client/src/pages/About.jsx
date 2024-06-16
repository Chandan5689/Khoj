import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function About() {
  return (
    <>
      <div className='flex justify-center gap-5 flex-col'>
        <h2 className='text-5xl font-bold text-center mt-3'>About Us</h2>
        <div className='border-b-2 border-[#cacaca] border-b-solid w-5/6 ml-auto mr-auto '></div>
      </div>

      <div className='flex ml-auto mr-auto justify-evenly mt-24 '>
        <div className='w-2/5 h-auto yeseva-one-regular flex flex-col gap-5 '>
          <h2 className='font-bold text-4xl'>Welcome to Khoj</h2>
          <p className='text-2xl '>Khoj is a platform for  your ultimate destination discovery platform. Whether you're seeking the perfect vacation spot, a hidden gem for your next adventure, or simply inspiration for your travels, Khoj is here to guide you. Happy exploring with Khoj! </p>
          <div className='flex gap-4'>
          <FaFacebook />
          <FaXTwitter />
          <FaSquareInstagram />

          </div>
          
        </div>
        <div className=' '>
          <img src="src/components/images/logoblack.png" className=' ' alt="" />
        </div>
      </div>
    </>

  )
}

export default About