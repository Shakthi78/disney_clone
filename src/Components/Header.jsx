import React, { useState } from 'react'
import Logo from '../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar,HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem';


const Header = () => {
    const [toggle, setToggle] = useState(false)

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]


  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-8 '>
        <img src={Logo} className=' w-[80px] md:w-[150px] object-cover ' />
        <div className='hidden md:flex gap-8 ml-20'>
        {menu.map((item)=>{
            return <HeaderItem name={item.name} Icon={item.icon}/>
        })}
        </div>
        <div className='flex md:hidden gap-8'>
        {menu.map((item, i)=> i<3 &&
             ( <HeaderItem name={''} Icon={item.icon} />)
        )}
        <div className="md:hidden" onClick={()=>{setToggle(!toggle)}} >
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 '>
            {menu.map((item, i)=> i>2 &&
             ( <HeaderItem name={item.name} Icon={item.icon} />)
            )}
            </div>:null}
            
        </div>
        </div>
        </div>

        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[50px] rounded-full'/>
               
    </div>
  )
}

export default Header