'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';
import { FONT_PLAYFAIR, FONT_ARCHIVO } from '@/config';

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  const theme = useTheme();
  const logoMainPath = branding.logo.main;
  const palette = theme?.vars ? theme.vars.palette : theme.palette;

  return logoMainPath ? (
    <CardMedia src={logoMainPath} component="img" alt="logo" sx={{ width: { xs: 112, lg: 140 } }} loading="lazy" />
  ) : (
    <Box sx={{ width: { xs: 160, lg: 195 }, height: { xs: 32, lg: 38 } }}>
      <svg viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <g fill={palette.primary.main}>
          {/* Left slash: thicker, styled */}
          <path d="M 16 42 C 14.5 42 13.5 41 14.0 39.5 L 23.5 12.5 C 24.0 11.0 25.5 10.0 27.0 10.0 H 33.0 C 34.5 10.0 35.5 11.0 35.0 12.5 L 25.5 39.5 C 25.0 41.0 23.5 42.0 22.0 42.0 H 16 Z" />
          {/* Right slash: thinner, parallel */}
          <path d="M 32 42 L 40.5 15.0 C 40.8 14.0 41.8 13.0 43.0 13.0 H 46.5 L 38.0 40.0 C 37.7 41.0 36.7 42.0 35.5 42.0 H 32 Z" />
        </g>
        {/* BNA Text - Serif style */}
        <text
          x="58"
          y="32"
          fill={palette.primary.main}
          style={{
            fontFamily: FONT_PLAYFAIR,
            fontSize: '30px',
            fontWeight: '700',
            letterSpacing: '1px'
          }}
        >
          BNA
        </text>
        {/* CONTÁBIL Text - Sans-serif, small, wide tracking */}
        <text
          x="58"
          y="44"
          fill={palette.primary.main}
          style={{
            fontFamily: FONT_ARCHIVO,
            fontSize: '9px',
            fontWeight: '600',
            letterSpacing: '6px'
          }}
        >
          CONTÁBIL
        </text>
      </svg>
    </Box>
  );
}
