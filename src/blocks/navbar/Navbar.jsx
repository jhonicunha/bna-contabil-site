'use client';
import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// @project
import ElevationScroll from './ElevationScroll';
import ContainerWrapper from '@/components/ContainerWrapper';

export const navbarHeight = { xs: 64, sm: 72, md: 84 };

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: navbarHeight.md,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': { minHeight: navbarHeight.sm }
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': { minHeight: navbarHeight.xs },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

/***************************  NAVBAR - 10  ***************************/

/**
 *
 * Demos:
 * - [Navbar10](https://www.soflinc.com.br/blocks/navbar/navbar10)
 *
 * API:
 * - [Navbar10 API](https://docs.soflinc.com.br/ui-kit/development/components/navbar/navbar10#props-details)
 */

export default function Navbar({ children, isFixed = true, isHomepage = false, ...props }) {
  const triggerSX = isHomepage
    ? {
        bgcolor: 'rgba(27, 83, 133, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.10)'
      }
    : undefined;

  return (
    <>
      <ElevationScroll isFixed={isFixed} triggerSX={triggerSX} {...props}>
        <AppBar {...(!isFixed && { position: 'static', elevation: 0 })} component="nav" color="inherit" sx={{ background: 'transparent' }}>
          <StyledToolbar>
            <ContainerWrapper>{children}</ContainerWrapper>
          </StyledToolbar>
        </AppBar>
      </ElevationScroll>
      {isFixed && !isHomepage && <StyledToolbar />}
    </>
  );
}

Navbar.propTypes = { children: PropTypes.any, isFixed: PropTypes.bool, props: PropTypes.any };
