import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import BarChart1 from "../../components/BarChart1"

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart1 />
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
