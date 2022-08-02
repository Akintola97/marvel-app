import React from 'react'
import InformationModal from './InformationModal';


const Information = ({id, thumbnail, title, description, comics, copyright}) => {
  
  const truncateString = (str, num) => {
    if(str.length > num){
        return str.slice(0, num) + '...'
    } else 
    return str;
} 







  return (
   <InformationModal id = {id} thumbnail = {thumbnail} title={title} description={description} comics={comics} copyright={copyright} >
    <div>
    <img className='w-[40vmin] p-5' src = {thumbnail}  alt = {title}/>
    <p className='w-full text-center text-white'>{truncateString(title,12)}</p>
   </div>
   </InformationModal>
    
    
   
  
  )
 
}

export default Information