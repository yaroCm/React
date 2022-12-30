import { AddOutlined, MailOutline } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate
        duis laboris. Esse esse consectetur ullamco excepteur ullamco amet.
        Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud
        incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco
        ipsum do adipisicing irure.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
