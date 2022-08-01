import React from 'react'

const Information = ({id, thumbnail, title}) => {
  const truncateString = (str, num) => {
    if(str.length > num){
        return str.slice(0, num) + '...'
    } else 
    return str;
} 



  return (
    <div>
    <img className='w-[40vmin] p-5' src = {thumbnail} />
    <p className='w-full text-center'>{truncateString(title,25)}</p>
   </div>
    
    
    
  
  
  )
}

export default Information