import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import './Footer.css';
import { Grid, Slider } from '@mui/material';
function Footer() {
  return (
    <div className=' justify-between flex fixed bottom-0 h-16 w-full bg-spotify-custom-gray p-5 '>
      <div className='flex items-center text-white w-80 flex-30'>
      <img className='h-16 w-16 mr-5 object-contain' src="https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png" alt="" />
      <div>
        <h4 className='mb-1'  >Closer</h4>
        <p className='text-xs'>Chainsmoker</p>
      </div>
      </div>
      <div className='text-white flex items-center justify-between flex-30 py-0 px-24'>
        <ShuffleIcon className='footer_green'/>
        <SkipPreviousIcon className='footer_icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
        <SkipNextIcon className='footer_icon'/>
        <RepeatIcon className='footer_green'/>

      </div>
      <div className='footer_right flex-30 flex items-center justify-between text-white '>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuos-slider'/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;
