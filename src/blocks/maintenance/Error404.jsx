'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Error404 from '@/images/maintenance/Error404';

/***************************  ERROR 404 - PAGES  ***************************/

export default function Error404Page({ primaryBtn, heading }) {
  return (
    <ContainerWrapper>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 1,
          height: '100vh',
          py: SECTION_COMMON_PY,
          minHeight: { xs: 450, sm: 600, md: 800 }
        }}
      >
        <GraphicsCard sx={{ width: 1, height: 1, py: { xs: 3, sm: 4, md: 6 } }}>
          <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: 1, gap: { xs: 2, sm: 1 } }}>
            <Box sx={{ mb: { xs: 1, sm: 2 } }}>
              <LogoSection />
            </Box>
            <Error404 />
            <Stack sx={{ gap: 2.25, alignItems: 'center', mt: { sm: -4, lg: -5 } }}>
              <Typography sx={{ width: { xs: 260, sm: 360, md: 450 }, textAlign: 'center', color: 'text.secondary' }}>{heading}</Typography>
              {primaryBtn && <Button variant="contained" size="medium" {...primaryBtn} />}
            </Stack>
          </Stack>
        </GraphicsCard>
      </Stack>
    </ContainerWrapper>
  );
}

Error404Page.propTypes = { primaryBtn: PropTypes.any, heading: PropTypes.string };
