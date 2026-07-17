'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @next
import { usePathname } from 'next/navigation';

// @project
import { Footer7 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import ThemeProviders from '@/components/ThemeProvider';

// @data
import { navbar } from './data';

/***************************  LAYOUT - MAIN  ***************************/

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const headerWrapperStyles = isHomepage
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        bgcolor: 'transparent',
        borderBottom: 'none'
      }
    : {
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'grey.200'
      };

  return (
    <ThemeProviders>
      <>
        {/* header section */}
        <Box sx={headerWrapperStyles}>
          <Navbar10 isHomepage={isHomepage}>
            <NavbarContent10 {...navbar} isHomepage={isHomepage} />
          </Navbar10>
        </Box>
        {/* app/(landing)/* */}
        <main>{children}</main>

        {/* footer section */}
        <Footer7 />
      </>
    </ThemeProviders>
  );
}

MainLayout.propTypes = { children: PropTypes.any };
