'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useScrollTrigger } from '@mui/material';

// @third-party
import { motion } from 'motion/react';

// @project
import { navbarHeight } from '../Navbar';
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';
import { withAlpha } from '@/utils/colorUtils';

/***************************  NAVBAR - CONTENT 10  ***************************/

/**
 *
 * Demos:
 * - [NavbarContent10](https://www.soflinc.com.br/blocks/navbar/navbar10)
 *
 * API:
 * - [NavbarContent10 API](https://docs.soflinc.com.br/ui-kit/development/components/navbar/navbar-content/navbarcontent10#props-details)
 */

export default function NavbarContent({ landingBaseUrl, navItems, primaryBtn, secondaryBtn, animated, isHomepage = false }) {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const updatedSecondaryBtn = {
    ...secondaryBtn,
    children: isHomepage ? <SvgIcon name="tabler-user" size={18} color="common.white" /> : secondaryBtn?.children,
    sx: {
      ...secondaryBtn?.sx,
      ...(isHomepage && {
        color: 'common.white',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(255, 255, 255, 0.4)'
        }
      })
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: 1, position: 'relative' }}>
      {/* Left Column: Logo */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Logo to={landingBaseUrl} reverse={isHomepage} />
      </Box>

      {/* Center Column: Menu */}
      {!downMD && navItems && (
        <Box sx={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ bgcolor: trigger ? 'transparent' : (isHomepage ? 'rgba(255, 255, 255, 0.08)' : 'grey.200'), borderRadius: 10, transition: 'background-color 0.25s ease' }}>
            <NavMenu {...{ navItems }} isSticky={trigger} menuTextColor={isHomepage ? 'common.white' : undefined} />
          </Box>
        </Box>
      )}

      {/* Right Column: Actions / Drawer Toggle */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: { xs: 1, md: 1.5 } }}>
        {!downSM && (
          <>
            <ButtonAnimationWrapper>
              {animated ? (
                <motion.div
                  initial={{ borderRadius: '50px' }}
                  animate={{
                    boxShadow: [
                      `0px 0px 0px 0px ${withAlpha(theme.vars.palette.primary.main, 0.7)}`,
                      `0px 0px 0px 8px ${withAlpha(theme.vars.palette.primary.main, 0)}`,
                      `0px 0px 0px 0px ${withAlpha(theme.vars.palette.primary.main, 0)}`
                    ],
                    borderRadius: '50px'
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                >
                  <NavPrimaryButton {...primaryBtn} />
                </motion.div>
              ) : (
                <NavPrimaryButton {...primaryBtn} />
              )}
            </ButtonAnimationWrapper>
            <NavSecondaryButton {...updatedSecondaryBtn} />
          </>
        )}
        {downMD && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color={isHomepage ? 'common.white' : 'text.primary'} />,
                color: 'inherit',
                sx: { 
                  minWidth: 40, 
                  width: 40, 
                  height: 40, 
                  p: 0,
                  ...(isHomepage && {
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: 'common.white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    }
                  })
                }
              }}
            >
              <ContainerWrapper
                sx={{
                  height: 'auto',
                  maxHeight: { xs: `calc(100vh - ${navbarHeight.xs}px)`, sm: `calc(100vh - ${navbarHeight.sm}px)` },
                  overflowY: 'auto'
                }}
              >
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 2, py: 2.5, mx: -2, bgcolor: 'grey.100' }}>
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                    <NavSecondaryButton {...updatedSecondaryBtn} />
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Box>
    </Box>
  );
}

NavbarContent.propTypes = {
  landingBaseUrl: PropTypes.any,
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  selectedTheme: PropTypes.any,
  animated: PropTypes.any
};
