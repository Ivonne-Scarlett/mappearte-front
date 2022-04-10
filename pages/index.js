import React from "react"
import Nav from "/components/Nav"
import OpacityCard from '/components/OpacityCard'
import Footer from '../components/Footer'
       
export default function Home() {
  return (
    <div className='w-full h-screen bg-test relative'>
      <Nav />
      <div className='mt-20 md:mt-24'>
        <OpacityCard className='w-1/2 mt-8'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias facilis blanditiis dolorum odit molestias ullam animi eos nulla, saepe tenetur voluptate vitae?</p>
        </OpacityCard>
      </div>
      <Footer />
    </div>
  )
}
