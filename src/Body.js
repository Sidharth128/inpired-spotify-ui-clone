import React from 'react';
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
function Body({spotify}) {
  const [{ discover_weekly },dispatch] = useDataLayerValue();
  return ( 
    <div className='body h-screen text-white flex-80 overflow'>
      <Header spotify={spotify} />

      <div className='flex items-end p-3'>
        <img className='h-[20vh] mx-5 my-0' src={discover_weekly?.images[0].url} alt="" />
        <div className='flex-1'>
          <strong>PLAYLIST</strong>
          <h2 className='text-5xl mb-4'>Discover Weekly</h2>
          <p className='text-xs'>{discover_weekly?.description}</p> 
          {/* description */}
        </div>
      </div>
       <div className='body_songs '> 
        <div className='body_icons flex items-center'>
        <PlayCircleFilledIcon className='body_shuffle ml-12 mt-5 mb-5' />
        <FavoriteIcon fontSize='large'/>
        <MoreHorizIcon />
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
        <SongRow track = {item.track} />
        ))}
       </div>
    </div>
  );
}

export default Body;
