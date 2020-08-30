import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';

export default function FileUpload() {
  const amount = 4;

  return (
    <Card>
      <CardContent>
        Please click to confirm sending
        {amount}
        emails.
      </CardContent>
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          // onClick={e => {
          //   // this.refs['file-upload'].click()
          // }}
        >
          Confirm
        </Button>
      </CardActions>
    </Card>
  );
}
