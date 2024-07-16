import React from 'react';
import './SidebarOption.css';

function SidebarOption({title,Icon}) {
  return (
    <div className='myside flex items-center transition-colors duration-200 ease-in text-gray-500 h-10 cursor-pointer hover:text-white'>
      <div className='px-2.5'>
      {Icon && <Icon/>}
      </div>

      {Icon ? <h4>{title}</h4> : <p className='mt-2 mr-5 text-xs'>{title}</p>}
    </div>
  )
}

export default SidebarOption;
