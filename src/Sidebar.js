import React, { useState } from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
  //we pull from the data layer
  const [{playlists},dispatch] = useDataLayerValue();
  //here just destructuring and getting the playlist not the entire state
  return (
    <div className='px-2.5 min-w-56 text-white h-screen flex-20 bg-spotify-black '>
     <img className='p-2 mr-auto' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
    
     <SidebarOption Icon={HomeIcon}  title="Home"/>
     <SidebarOption Icon={SearchIcon} title="Search"/>
     <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
     <br />
     <strong className='m-3 p-1 text-xs'>PLAYLISTS</strong>
     
     <hr className=' border border-custom-gray mt-2 mb-2 mx-auto' />
     
     {playlists?.items?.map(playlist =>(
      <SidebarOption title={playlist.name} />
     ) )}

   

    </div>
  )
}

export default Sidebar;
