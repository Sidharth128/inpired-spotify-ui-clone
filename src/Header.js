import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user },dispatch] = useDataLayerValue();
  return (
    <div className='flex justify-between mb-8'>
     <div className='min-w-16 header_left p-3 flex flex-50 items-center bg-white text-gray-500 rounded-3xl'>
        <SearchIcon />
        <input className='focus:outline-none w-full' placeholder='What do you want to listen to?' type='text' />
    </div> 

    <div className='flex items-center '>
        <Avatar src={user?.images[0]?.url} alt= {user?.display_name}/>
    <h4 className='ml-3'> {user?.display_name} </h4> 
    {/* ? is used if it does't break in loading  */}
    </div>
    </div>
  )
}

export default Header
