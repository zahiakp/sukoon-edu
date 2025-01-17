import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'

function Button({loading}:{loading:any}) {
  return (
    <button className="bg-black rounded-lg my-4 text-white flex items-center justify-center gap-3 py-3 px-10" type="submit" disabled={loading}>
                {loading? <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg><p>Uploading...</p></>:<>
 <p>Upload Item</p><FiUploadCloud className='text-lg ml-2'/></>}
                </button>
  )
}

export default Button
