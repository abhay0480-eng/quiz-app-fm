import '../App.css';
import React, { useContext } from 'react'
import Button from '../components/Button';
import Icons from '../components/Icons';
import ImageIcons from '../components/ImageIcons';
import { useNavigate } from "react-router-dom";
import {ThemeContext} from '../App'
import { useLocation } from 'react-router-dom';



export default function Home() {
  const navigate = useNavigate();
  let location = useLocation();
  const {theme,setTopic} = useContext(ThemeContext)
 

  const selectTopic = (topic) => {
    setTopic(topic)
   return navigate(`/topic/${topic}`);
  }

  location.pathname === "/" && setTopic()

  return (
   
    <div  className={`${theme?"bg-[#F4F6FA]":"bg-[#313E51]"}`}>
   <div className='lg:max-w-7xl px-5 md:px-14 lg:px-0  lg:mx-auto '>
   
    <div className='flex flex-col h-screen justify-center  '>
    <div className='lg:grid lg:grid-cols-2 pt-24 md:pt-0'>
    <div className='mb-14 lg:mb-0'>
      <h1 className={`${!theme?"text-[#F4F6FA]":"text-[#313E51]"} text-[40px] md:text-[64px] font-light`}>Welcome to the <br/><span className='font-medium'>Frontend Quiz!</span></h1>
      <p className='lg:text-[#626C7F] text-[14px] md:text-[20px] mt-5 italic'>Pick a subject to get started.</p>
    </div>
    <div className=''>
      <Button onClick={()=>selectTopic(0)} className=" p-[10px] md:p-[20px] bg-[#fff]"><Icons bgcolor="bg-[#FFF1E9] p-1"><ImageIcons src="/images/icon-html.svg"/></Icons> HTML  </Button>
      <Button onClick={()=>selectTopic(1)} className=" p-[10px] md:p-[20px] bg-[#fff]"><Icons bgcolor="bg-[#E0FDEF] p-1"><ImageIcons src="/images/icon-css.svg"/></Icons>CSS</Button>
      <Button onClick={()=>selectTopic(2)} className=" p-[10px] md:p-[20px] bg-[#fff]"><Icons bgcolor="bg-[#EBF0FF] p-1"><ImageIcons src="/images/icon-js.svg"/></Icons>Javascript</Button>
      <Button onClick={()=>selectTopic(3)} className=" p-[10px] md:p-[20px] bg-[#fff]"><Icons bgcolor="bg-[#F6E7FF] p-1"><ImageIcons src="/images/icon-accessibility.svg"/></Icons>Accessibility</Button>
    </div>
    </div>
    </div>
   </div>
   </div>
  );
}
