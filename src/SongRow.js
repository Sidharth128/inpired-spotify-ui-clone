import React from 'react';

function SongRow({ track }) {
  return (
    <div className='hover:cursor-pointer bg-black opacity-50 m-5 p-5 flex items-center text-white z-100'>
      <img className='h-10 w-10' src={track.album.images[0].url} alt="" />
      <div className='ml-5'>
        <h1 className='text-base'>{track.name}</h1>
        <p className='text-sm mt-3 text-gray-400' >{track.artists.map((artist)=> artist.name).join(",")} -{""}
        {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow;
