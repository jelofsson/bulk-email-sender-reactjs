import React, { Component } from 'react';
import {
  Container,
  Grid,
  Box,
} from '@material-ui/core';
import Datatable from './Datatable';
import FileUpload from './FileUpload';
import Confirm from './Confirm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    };

    this.loadEntries = this.loadEntries.bind(this);
  }

  loadEntries(entries) {
    this.setState({ entries });
    console.log(entries);
  }

  render() {
    const {
      entries,
    } = this.state;

    return (
      <div className="App">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box>
                <Datatable entries={entries} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FileUpload onSubmit={this.loadEntries} />
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
}


export default App;
