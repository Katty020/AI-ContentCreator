import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

function OutputSection() {
    const editorRef:any =useRef();
  return (
    <div className='bg-white shadow-lg border'>
        <div className='flex justify-between items-center p-5'>
            <h2>
                Your Result
            </h2>
            <Button>
                <Copy/> Copy
            </Button> 
        </div>
        
        <Editor
        ref={editorRef}
    initialValue="Outcome Appears Here..."
    
   height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdowm())}
  />
    </div>
  )
}

export default OutputSection