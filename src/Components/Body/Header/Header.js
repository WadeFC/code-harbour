import React from 'react'
import './Header.css'
// import SidebarOption from '../../Sidebar/SidebarOption/SidebarOption'
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import EastIcon from '@mui/icons-material/East';
// import {  FaMdEast } from 'react-icons/fa';
// import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='content'>
        <div className='header_left'>
       

        {/* <FaBiSpaceBar/> */}
        {/* <FaMdEast/> */}
            {/* <SidebarOption Icon={KeyboardBackspaceIcon} />
            <SidebarOption Icon={EastIcon} /> */}
        </div>

        <div className='input'>
            {/* <SearchIcon className='icon'/> */}
            <input placeholder='Search for artist,songs and...' type='text' />
        </div>
    </div>
  )
}

export default Header