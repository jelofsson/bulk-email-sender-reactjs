import React, { Component } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import axios from 'axios';

class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    const {
      onSubmit,
    } = this.props;

    event.preventDefault();
    axios.get('MOCK_DATA-3.csv')
      .then((response) => {
        onSubmit(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardContent>
            <input
              type="file"
              ref={this.fileInput}
            />
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              Add Subjects
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

export default FileUpload;
