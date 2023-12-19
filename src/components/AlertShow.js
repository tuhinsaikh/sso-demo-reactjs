import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function AlertShow({severity,msg}) {
  const style = {
    width:'20rem',
    position:'fixed',
    right:'10px',
  }
  return (
    <Stack sx={style} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>Success</AlertTitle>
        {msg}
      </Alert>
    </Stack>
  );
}