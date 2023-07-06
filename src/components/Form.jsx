import React from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Form = () => {
  return (
      <div className="mt-6 flex items-center relative">
        <input  
            type="search"
            id="getword"
            placeholder="Search for any word..."
            className="flex align self-start w-full h-12 border-none rounded-[16px] bg-accent text-[1rem] font-bold pl-5 focus:outline-none focus:ring-1 focus:ring-search"
            />
            <MagnifyingGlassIcon className="absolute w-6 h-6 text-search right-5 top-3" strokeWidth="1"/>
      </div>
  )
}

export default Form