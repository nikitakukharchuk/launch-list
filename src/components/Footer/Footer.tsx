import { Typography } from "@mui/material";


export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography component="p" variant="body2" color="inherit">
        © 03.05.2023 - Nikita Kukharchuk, frontend developer
      </Typography>
    </footer>
  );
};