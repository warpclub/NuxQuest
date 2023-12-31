import Navbar from '../Components/Navbar'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Spinner from '../Components/Spinner';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL
function Broadcast() {

  const API_URL = BASE_URL + `/announcement/`

  const [open, setOpen] = useState(1);
  // const [alwaysOpen, setAlwaysOpen] = useState(true);
  const [vis, setVis] = useState(0)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [aList,setAList]=useState([])
  const [formData, setFormData] = useState({

    title: '',
    content: '',

  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    }
    )
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = {}


    if (!formData.title.trim()) {
      validationErrors.title = "This is required"
    } 
    if (!formData.content.trim()) {
      validationErrors.content = "This is required"
    } 
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true)
      axios.post(API_URL, { title: formData.title, content: formData.content }).then((res) => {
        console.log(res.status)
        if (res.status === 201) {
setLoading(false)
axios.get(API_URL)
.then((res) =>{setAList(res.data.reverse())
  //  console.log(aList)
  
})
 .catch((err) => console.log(err))
        }
      }).catch((errors) => {
        setLoading(false)
        setVis(1)
        setTimeout(() => {
          setVis(0)
        }, 2000);
      })
    }

  }
  useEffect(() => {
   axios.get('https://nuxquest.onrender.com/announcement/')
   .then((res) => {setAList(res.data.reverse())
    //  console.log(aList)
    }
  
  )
    .catch((err) => console.log(err))
  }, []);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
   

  return (
  <>
  <Navbar/>
  <div className='text-center mt-3'>
  <h1 className='font-bold text-3xl [@media(min-width:429px)]:text-5xl leading-20'>Global Broadcast</h1>
  <h3 className='[@media(min-width:429px)]:text-2xl text-xl'>Send a Global Message to all other adventures of <span className='text-red-500'>
       NuxEland
    </span>
    </h3>
    <form  className='flex flex-col justify-evenly mx-auto h-[400px] [@media(min-width:746px)]:w-1/2 [@media(min-width:319px)]:w-2/3 w-5/6'>
    <Input name='title' onChange={handleChange} variant="outlined" label="Message" className='bg-white'/>
    {errors.title && <span className='text-red-400'>{errors.title}</span>}
    <Textarea name='content' size="lg" onChange={handleChange} label="Details" className='bg-white' rows={8}/>
    {errors.content && <span className='text-red-400'>{errors.content}</span>}
    <Button color='deep-orange' onClick={handleSubmit} variant="gradient">Submit</Button>
    {vis ? <span className='text-red-400 block'>Broadcast Failed</span> : ''}
    {loading && <Spinner />}
    </form>
  </div>
  <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:opacity-100"
    />
    <h1 className='font-bold text-3xl [@media(min-width:429px)]:text-5xl leading-20 mx-auto text-center my-2'>Global Feed</h1>
    <div className='w-2/3 mx-auto mb-10 border-2 border-solid border-black p-4 bg-yellow-500/50 rounded-lg hover:cursor-[url(/cursorFinger.png),_pointer'>
 
      {aList.length > 0 ? aList.map((elem,ind)=>{
        return <Accordion icon={<Icon id={elem.id} open={open} />} animate={CUSTOM_ANIMATION} className='hover:cursor-[url(/cursorPointer.png),_default]' key={ind} open={open === elem.id}>
        <AccordionHeader className='text-sm [@media(min-width:429px)]:text-2xl hover:cursor-[url(/cursorFinger.png),_pointer]' onClick={() => handleOpen(elem.id)}>
          {elem.title}
        </AccordionHeader>
        <AccordionBody>
         {elem.content}
        </AccordionBody>
      </Accordion>
      }): <p className='text-center text-xl text-black'>No global announcements.</p>}
  
    </div>
  </>
  )
}

export default Broadcast

