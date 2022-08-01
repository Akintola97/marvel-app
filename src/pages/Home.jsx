import React from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { MD5 } from 'crypto-js'
import Row from '../components/Row'



const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString()
}



const Home = (event) => {
    const[character, setcharacter] = useState('')
    const[searchData, setSearchData] = useState({})
    const ts = Date.now().toString()
    const apiKey = '3125816b78248f608f0c1796b3570614'
    const privateKey = 'cccf1d05ada0dc91ded608179b0e39ba919f3b13'
    const hash = getHash(ts, privateKey, apiKey)
    
   const fetchURL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${character}`

  const Marvel = (event) =>{
        fetch(fetchURL)
        .then((response) => {
            return response.json();
        })
        .then((
            data) => {
        setSearchData(data)
         })
         .catch((error) =>
         console.log(error))
        
        }
  
  
 //console.log(searchData.data && searchData.data.results)

  return (
    <>
    <div className='flex justify-center pt-5'>
    <input value={character} onKeyPress={Marvel} onChange={e => setcharacter(e.target.value)} className='border p-2 uppercase' type = 'text' placeholder='Character...'>
    </input>
    <div className=''>
        <button onClick={Marvel} className='bg-green-400 p-3 text-lg'><AiOutlineSearch />
        </button>
        </div>  
     
    </div>
   {/* <div className='flex justify-center text-[1.5vmin] p-5 h-full w-full'>
       {searchData.data && searchData.data.results.map((x) => {
         return <h1>{x.name}</h1> 
       }
       )}
   </div>  */}
  <Row element={searchData} title = {character}/>
   </>
  )
}


export default Home
