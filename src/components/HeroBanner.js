import React from 'react';
import {Box,Typography,Stack,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg:'212px', xs:'70px' } , ml :{sm:'50px'}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Boomin fitness 
      </Typography>
      <Typography mb="23px" mt="30px" fontWeight={700} sx = {{ fontSize:{lg:'44px', xs:'40px'} }}>
        Sweat, Smile &<br />  Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px "
        sx={{ 
          opacity:0.1,
          display:{lg:'block', xs:'none'}
          }}
      >
        Excercises
      </Typography>
      <Button variant="contained"  color="error" href="#exercises" 
      sx={{ background:'#ff2625', padding:'10px' }}
      >Explore Exercises</Button>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img '/>
    </Box>
  )
}

export default HeroBanner