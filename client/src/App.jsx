import React from 'react';
import {
  Container,
  Grid,
  Box,
} from '@material-ui/core';
import Datatable from './Datatable';
import FileUpload from './FileUpload';
import Confirm from './Confirm';

function App() {
  return (
    <div className="App">

      <Container maxWidth="lg">
        <Grid container spacing={3}>

          <Grid item xs={8}>
            <Box>
              <Datatable />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <FileUpload />
            </Box>
            <Box>
              <Confirm />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
