import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-red-600 via-red-200 to-blue-600 
    flex flex-col justify-center items-center text-Black'>
        
        <h2 className='text-3xl font-bold'>
        Browse all Templates
        </h2>
        <p>
            What Would you like to create Today?
        </p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
                <Search className='text-primary'/>
                <input type='text' placeholder='Search...' 
                onChange={(event)=>onSearchInput(event.target.value)}
                className='bg-transparent w-full outline-none' />
            </div>
        </div>
    </div>
  )
}

export default SearchSection