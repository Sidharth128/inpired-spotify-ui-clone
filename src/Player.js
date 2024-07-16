import React from 'react'; 
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
function Player() {
  return (
    <div className=''>
      <div className='flex'>
      {/* sidebar */}
        <Sidebar />
      {/* Body */}
      <Body 
      //spotify={spotify} 
      />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Player;
