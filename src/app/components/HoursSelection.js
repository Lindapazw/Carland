"use client"

import React, {useState} from "react";

// headless ui
import {Menu} from '@headlessui/react';

// icons
import {FaClock} from 'react-icons/fa';

// hours
const hours = ['10:00 AM', '12:00 AM', '14:00 AM', '16:00 AM'];

const HoursSelection = () => {
    const[hour,setHour] = useState('10:00 AM')

    return (
        <Menu as='div' className='w-full h-full flex xl:flex-row'>
            <div className="relative flex-1">
                {/* btn */}
                <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
                    <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0"> 
                        <FaClock className="text-accent-DEFAULD"/> 
                        <div className="text-[15px] uppercase font-bold">
                            Select Hours 
                        </div>
                    </div>
                    <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                        {hour}
                    </div>
                </Menu.Button>
                {/* items */}
                <Menu.Items className='dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
                    menu items
                </Menu.Items>
            </div>
        </Menu>
    )
}

export default HoursSelection