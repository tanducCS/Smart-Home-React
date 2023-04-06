import { useState } from "react";
import { Box, Switch, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Slider from '@mui/material/Slider';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Switch onChange={handleChange} color="secondary"></Switch>
        </Box>
      </Box>
      <Box>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color="secondary"/>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
