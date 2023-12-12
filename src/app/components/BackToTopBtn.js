"use client"

import React, {useEffect, useState} from "react";

// icons
import {FaChevronUp} from 'react-icons/fa';

// react scroll
import { Link } from 'react-scroll';

const BackToTopBtn = () => {
    const [isActive, setActive] = useState(false)
    return (
        <Link className="fixed bg-accent-DEFAULD hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white">
        <FaChevronUp className="text-xl"/>
        </Link>
    )
}

export default BackToTopBtn