'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// @third-party
import { motion } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

/***************************  SIMPLE NARROW CTA  ***************************/

export default function CtaSimple({ heading, caption, primaryBtn }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#121212',
        py: { xs: 5, sm: 6, md: 7 }
      }}
    >
      {/* Blurred background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 1,
          backgroundImage: 'url(/assets/images/hero-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          transform: 'scale(1.05)'
        }}
      />
      {/* Blue gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(27, 83, 133, 0.85) 0%, rgba(15, 23, 30, 0.95) 100%)'
        }}
      />

      <ContainerWrapper sx={{ position: 'relative', zIndex: 3 }}>
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
          {/* Left Side: Headline & Caption */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack sx={{ gap: 1 }}>
              <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 700 }}>
                {heading}
              </Typography>
              {caption && (
                <Typography variant="body1" sx={{ color: 'grey.300', maxWidth: 650 }}>
                  {caption}
                </Typography>
              )}
            </Stack>
          </Grid>

          {/* Right Side: CTA Button */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ButtonAnimationWrapper>
                <Button
                  variant="contained"
                  startIcon={<SvgIcon name="tabler-brand-whatsapp" size={18} color="common.white" />}
                  {...primaryBtn}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: 2,
                    bgcolor: '#699ac5',
                    color: 'common.white',
                    boxShadow: '0 4px 12px rgba(105, 154, 197, 0.25)',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#5084b0',
                      color: 'common.white',
                      boxShadow: '0 6px 18px rgba(105, 154, 197, 0.4)'
                    }
                  }}
                />
              </ButtonAnimationWrapper>
            </motion.div>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
}

CtaSimple.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  primaryBtn: PropTypes.object
};
