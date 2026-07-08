'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';

/***************************  LOGO - ICON  ***************************/

export default function LogoIcon() {
  const theme = useTheme();
  const logoIconPath = branding.logo.logoIcon;
  const palette = theme?.vars ? theme.vars.palette : theme.palette;

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
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <g fill={palette.primary.main}>
            {/* Left slash: thicker, styled */}
            <path d="M 12 42 C 10.5 42 9.5 41 10.0 39.5 L 21.5 12.5 C 22.0 11.0 23.5 10.0 25.0 10.0 H 31.0 C 32.5 10.0 33.5 11.0 33.0 12.5 L 21.5 39.5 C 21.0 41.0 19.5 42.0 18.0 42.0 H 12 Z" />
            {/* Right slash: thinner, parallel */}
            <path d="M 28 42 L 36.5 15.0 C 36.8 14.0 37.8 13.0 39.0 13.0 H 42.5 L 34.0 40.0 C 33.7 41.0 32.7 42.0 31.5 42.0 H 28 Z" />
          </g>
        </svg>
      )}
    </Box>
  );
}
