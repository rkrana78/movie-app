import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const useStyles = {
   
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#2d313a",
      zIndex: 100,
    
};

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 
  
  return (
    <Box >
      <BottomNavigation
        showLabels
        style={useStyles}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/trending"><BottomNavigationAction style={{ color: "white" }} label="Trending" icon={<WhatshotIcon />} /></Link>
        <Link to="/movies"><BottomNavigationAction style={{ color: "white" }} label="Movies" icon={<MovieIcon />} /></Link>
        <Link to="/series"><BottomNavigationAction style={{ color: "white" }} label="Tv Series" icon={<TvIcon />} /></Link>
        <Link to="/search"><BottomNavigationAction style={{ color: "white" }} label="Search" icon={<SearchIcon />} /></Link>
      </BottomNavigation>
    </Box>
  );
}