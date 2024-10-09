import React from 'react';
import CodeWithEase from '../styles/CodeWithEase.png';
import S from '../styles/S.png';
import Button from '@mui/material/Button';

const Header = () => {

  return (
    <div className="Header">
      <img src={S} height="65px" sizes='40px' style={{borderRadius: '45px'}}/>
      <ul>
        <li><Button size="large" href="/#home" color="inherit">Home</Button></li>
        <li><Button size="large" href="/#about" color="inherit">About</Button></li>
        <li><Button size="large" href="/#experience" color="inherit">Experience</Button></li>
        <li><Button size="large" href="/#contact" color="inherit">Contact</Button></li>
      </ul>
    </div>
  );
}

export default Header;