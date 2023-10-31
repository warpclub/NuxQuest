import React, { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import Navbar from './Navbar'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

 const ListEncyclopedia = () => {
    const API_URL = BASE_URL + '/encyclopedia/{slug}/'
    
  useEffect(() => {
    axios.get(API_URL)
      .then(res => console.log(res.data))
      .catch(
        function (e) {
          console.log(e)
        })
  }, [])
    return (
        <>
        <Navbar/>
                <section className=" body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="text-cyan-500 text-3xl title-font font-medium font-Spy mb-4">hi</h1>
        <div className="flex mb-4">
          {/* <Link onClick={clickDes} className={`flex-grow border-b-2  ${Btn===0?'border-cyan-400 text-cyan-400':'border-gray-300'} py-2 text-lg px-1 hover:cursor-pointer`}>Description</Link>
          <Link onClick={clickFet} className={`flex-grow border-b-2  ${Btn!==0?'border-cyan-400 text-cyan-400':'border-gray-300'} py-2 text-lg px-1 hover:cursor-pointer`}>Features</Link> */}
        </div>
        <div className='h-[200px]'>
      <p className="leading-relaxed mb-4">hello</p>
      {/* <div className="flex border-t border-gray-200 py-2">
        <span className="text-white">Color</span>
        <span className="ml-auto text-white">{info[ind].color}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
            <span className="text-white">Size</span>
            <span className="ml-auto text-white">{info[ind].size}</span>
            </div> */}
            </div>
      </div>
      <Card imgUrl={''} style="lg:w-1/2 w-full h-[412px] object-cover object-center rounded-lg" />

    </div>
  </div>
</section>
            
        </>
    )
}

export default ListEncyclopedia