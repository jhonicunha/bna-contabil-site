import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @project
import { navbar } from '../landings/default/data';
import { Navbar, NavbarContent } from '@/blocks/navbar';

/***************************  LANDING - SECTIONS  ***************************/

export default function SectionsLayout({ children }) {
  return (
    <>
      <Box sx={{ bgcolor: 'grey.100' }}>
        <Navbar>
          <NavbarContent {...navbar} />
        </Navbar>
      </Box>
      {children}
    </>
  );
}

SectionsLayout.propTypes = { children: PropTypes.any };
