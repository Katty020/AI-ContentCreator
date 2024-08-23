"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { chatSession } from '@/utils/aimodel'

interface PROPS{
    params:{
        'template-slug' : string
    }
}



function CreateNewContent(props: PROPS) {
    
    
    const selectedTemplate: TEMPLATE|undefined=Templates?.find((item)=> item.slug==props.params['template-slug']);
    const [loading,setLoading]=useState(false);
    
    const GenerateAIContent= async(formData:any)=> {
        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiPrompt;
        const FinalAIPrompt=JSON.stringify(formData)+"," + SelectedPrompt;
    
        const result= await chatSession.sendMessage(FinalAIPrompt);
        console.log(result.response.text());
        setLoading(false);
    
    }
 
    return (
<div className='p-5'>
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
       
        {/* FORM SECTION */}
            <FormSection selectedTemplate={selectedTemplate}
            userFormInput={(v:any)=>GenerateAIContent(v)}
            loading={loading}
            
            
            />
        {/* output section */}
        <div className='col-span-2'>
        <OutputSection/>
        </div>
       
    </div>
    </div>
  )
}

export default CreateNewContent