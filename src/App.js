//import "./App.css";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from "@mui/system";
import CartWidget from './components/cartWIdget.js/CartWidget';

function App() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <CartWidget></CartWidget>
          <Typography variant="h6" component='div' sx={{flexGrow: 1}}></Typography>
          <Stack direction='row' spacing={2}>
            <Button color="inherit">Electrodomesticos</Button>

            <Button color="inherit">Ropa</Button>

            <Button color="inherit">Celulares</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;