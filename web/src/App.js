import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Routine from "./scenes/routine";
// import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import {connect} from 'mqtt/dist/mqtt';

function App() {
  let feed =  'nguyenha25012002/feeds/temperature';
let client = connect('mqtt://io.adafruit.com',{
username: "nguyenha25012002",
password: "aio_XxPs137wiW254ueUJcTGfUFKxKdl",
});

client.on('connect', () => {
// sub đúng kênh để nhận dữ liệu
client.subscribe('nguyenha25012002/feeds/temperature');
    console.log('há há ');


});

client.on('reconnect', () => {
    client.subscribe('nguyenha25012002/feeds/temperature');
    console.log('reconnected ');

});

client.on('error', (err) => console.log('error', err));

client.on('offline', () => connect = false);

client.on('close', () => connect = false);

client.on('message', (topic, message) => {
  console.log(`Received message: ${message.toString()} on topic ${topic}`);
});


  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Routine />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
