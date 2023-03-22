import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
    paddingLeft="1rem"
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ width : '40px', height
        : '40px', margin : '0 20px' }}/>
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="25px"
      >
        <Link to="/" style={{ textDecoration :'none', color : '#3A1212', borderBottom : '3px solid  #FF2625'}}>Home</Link>
        <a href="#excercises" style={{ textDecoration :'none', color : '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar