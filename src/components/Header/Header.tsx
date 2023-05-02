import { AppBar, Toolbar, Typography } from "@mui/material";


export const Header = () => {
  return (
    <AppBar position="static" style={{ alignItems: 'center', backgroundColor: '#3333' }}>
      <Toolbar>
        <Typography style={{ color: 'black' }} variant="h6">Rockets List</Typography>
      </Toolbar>
    </AppBar>
  );
};