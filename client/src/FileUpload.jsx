import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';

export default function FileUpload() {
  return (
    <Card>
      <CardContent>
        <input
          // ref={'file-upload'}
          type="file"
        />
      </CardContent>
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          // onClick={e => {
          //   // this.refs['file-upload'].click()
          // }}
        >
          Add Subjects
        </Button>
      </CardActions>
    </Card>
  );
}
