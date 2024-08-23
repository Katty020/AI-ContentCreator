"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSerachInput,setUserSerchInput]=useState<string>()
  return (
    <div>
      {/* secarch section component */}
        <SearchSection onSearchInput={(value:string)=> setUserSerchInput(value)}/>

      {/* Template section component */}
      <TemplateListSection userSearchInput={userSerachInput}/>
    </div>
  )
}

export default Dashboard