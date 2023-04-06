import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import { Kitchen } from '@mui/icons-material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";






export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    
    <Box sx={{ width: 500, fontSize: "20px",
    fontWeight: "bold",
    padding: "10px 20px",
    
     }}>

      <BottomNavigation sx={{
        border: 1,
        borderRadius:2,
        borderColor: colors.grey[100],
        color: colors.grey[100]
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Living room" icon={<ChairIcon sx={{ color: value === 0 ? colors.blueAccent[700] : 'inherit' }} />}  />
        <BottomNavigationAction label="Kitchen" icon={<Kitchen sx={{ color: value === 1 ? colors.blueAccent[700] : 'inherit' }}  />} />
        <BottomNavigationAction label="Bedroom" icon={<BedIcon sx={{ color: value === 2 ? colors.blueAccent[700] : 'inherit' }} />} />
        <BottomNavigationAction label="Movie room" icon={<LocalMoviesIcon sx={{ color: value === 3 ? colors.blueAccent[700] : 'inherit' }} />} />
        <BottomNavigationAction label="Game room" icon={<SportsEsportsIcon sx={{ color: value === 4 ? colors.blueAccent[700] : 'inherit' }} />} />
      </BottomNavigation>
    </Box>
  );
}