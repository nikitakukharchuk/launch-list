import { Button, Typography } from '@mui/material';
import React from 'react';

import { NavLink } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div >
      <div style={{ padding: 20 }}>
        <div>
          <NavLink to={'/'}>
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#f44336",
                color: "white",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
                marginBottom: '1rem'
              }}
            >
              Back to Home Page
            </Button>
          </NavLink>
        </div>
        <Typography variant='h1'>Page not found</Typography>
      </div>
    </div>
  );
};