import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between item-center'>
    
    <div className='flex gap-2 items-center p-2 border rounded-lg max-w-md '>
      <Search/>
      <input type='text' placeholder='Search...' className='outline-none'/>
    </div>
    <div>
      <h2 className='bg-blue-600 p-1 rounded-full text-x5 text-white px-2'>
      ❤️‍🔥 Join Now...
      </h2>
    </div>
    
    </div>


  )
}

export default Header