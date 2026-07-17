'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';

/***************************  LOGO - ICON  ***************************/

export default function LogoIcon({ reverse = false }) {
  const theme = useTheme();
  const logoIconPath = branding.logo.logoIcon;
  const palette = theme?.vars ? theme.vars.palette : theme.palette;
  const fillColor = reverse ? '#ffffff' : palette.primary.main;

  return (
    <Box
      className="icon-logo"
      sx={{
        width: { xs: 24, sm: 28, md: 32 },
        height: 1,
        position: 'relative',
        cursor: 'pointer',
        display: 'block',
        '& svg': {
          display: 'block'
        }
      }}
    >
      {logoIconPath ? (
        <CardMedia src={logoIconPath} component="img" alt="logo" sx={{ height: 1 }} loading="lazy" />
      ) : (
        <svg viewBox="0 0 156 288" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <g fill={fillColor} transform="translate(-11.16 -13.75)">
            {/* Left slanted line */}
            <path d="M89.82,264.69,167,112.38a5.14,5.14,0,0,0,.63-2,4.06,4.06,0,0,0-.5-2.1L143,67,24.58,293.23s-5.35,8.5,6.38,8.49H85.44A27.75,27.75,0,0,1,83,291.22c-.46-8.63,2.28-17.55,6.72-26.38Z" />
            {/* Right slanted line */}
            <path d="M89,50.8,11.8,203.11a5,5,0,0,0-.64,2,4,4,0,0,0,.51,2.1l24.17,41.22L154.22,22.26s5.34-8.51-6.39-8.49l-54.48,0a27.8,27.8,0,0,1,2.43,10.52c.46,8.63-2.28,17.55-6.72,26.37Z" />
          </g>
        </svg>
      )}
    </Box>
  );
}
