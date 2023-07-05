"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { AcademicCapIcon, MoonIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-12 my-6 mx-6 md:mx-0 md:h-12 md:my-12">
        <Link href="/" className="">
            <AcademicCapIcon className="h-10 w-10 text-gray-500" stroke-width="1"/>
        </Link>
        <div className="flex gap-4 items-center">
            <div className="relative text-sm font-bold md:text-lg">
                <button className="flex items-center gap-4">
                    <span>Sans Serif</span>
                    <ChevronDownIcon className="w-4 h-4 text-secondary" stroke-width="3" />
                </button>
            </div>
            <div class="w-px h-5 bg-gray-400"></div>
            <div className="flex items-center gap-4">
                <button title="Toggle light or dark mode" className="relative flex h-5 w-10 items-center rounded-xl bg-secondary">
                    <svg className="absolute h-3.5 w-3.5 rounded-full bg-white" style={ {right: 4, left: 'auto'} }></svg>
                </button>
                <MoonIcon className="w-6 h-6 text-secondary" stroke-width="2"/>
            </div>
        </div>
    </nav>
  )
}

export default Nav