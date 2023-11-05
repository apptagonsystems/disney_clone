import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
    import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {

    const [toggle, setToggle] = useState(false)
    const menu =[
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
    <div className='flex items-center gap-8 justify-between p-5'>
        <div className='flex gap-8'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
            <div className='hidden md:flex gap-8'>
                { menu.map((item, key) => (
                    <HeaderItem name={item.name} Icon={item.icon} key={key}/>
                ))}
            </div>
            {/* MOBILE */}
            <div className='flex md:hidden gap-5'>
                { menu.map((item, key) =>key<3&& (
                    <HeaderItem name={''} Icon={item.icon} key={key}/>
                ))}
            </div>

            <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical} />
                {toggle ?
                 <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                    { menu.map((item, key) =>key>2&& (
                        <HeaderItem name={item.name} Icon={item.icon} key={key}/>
                    ))}
                </div>
                : null}
            </div>

        </div>
        <img src='data:image/jpeg;base64,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' className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header