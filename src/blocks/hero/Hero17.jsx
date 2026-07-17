'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { withAlpha } from '@/utils/colorUtils';

// @assets
import Wave from '@/images/graphics/Wave';

/***************************  HERO - 17  ***************************/

export default function Hero17({ chip, headLine, captionLine, primaryBtn, listData }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderBottomLeftRadius: boxRadius,
        borderBottomRightRadius: boxRadius,
        bgcolor: '#121212',
        pt: { xs: 13, sm: 16, md: 20 },
        pb: { xs: 5, sm: 7, md: 9 }
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
          background: 'linear-gradient(180deg, rgba(27, 83, 133, 0.75) 0%, rgba(15, 23, 30, 0.90) 100%)'
        }}
      />
      <ContainerWrapper sx={{ position: 'relative', zIndex: 3 }}>
        <Box>
          <Box sx={{ pb: { xs: 1, sm: 2, md: 3 } }}>
            <Stack sx={{ alignItems: 'center', gap: 2 }}>
              {/* Top tag chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: [0.6, 1.15, 0.95, 1] }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${withAlpha(theme.vars.palette.primary.dark, 0)}`,
                    `0 0 20px ${withAlpha(theme.vars.palette.primary.main, 0.4)}`,
                    `0 0 0px ${withAlpha(theme.vars.palette.primary.dark, 0)}`
                  ],
                  borderRadius: '74px'
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'linear' }}
              >
                <Chip
                  variant="outlined"
                  label={chip.label}
                  slotProps={{
                    label: {
                      sx: { py: 0.5, px: 1.5, ...(typeof chip.label === 'string' && { typography: 'caption', color: 'grey.300' }) }
                    }
                  }}
                  sx={{ bgcolor: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'linear' }}
              >
                <Typography variant="h1" align="center" sx={{ maxWidth: 850, color: 'common.white', fontWeight: 800 }}>
                  {headLine}
                </Typography>
              </motion.div>

              {/* Wave Graphic */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Box sx={{ pt: 0.5, pb: 0.75 }}>
                  <Wave />
                </Box>
              </motion.div>

              {/* Subtitle / Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Typography variant="h6" align="center" sx={{ color: 'grey.300', maxWidth: 650, lineHeight: 1.6 }}>
                  {captionLine}
                </Typography>
              </motion.div>
            </Stack>

            {/* Actions & Chips Area */}
            <Stack sx={{ alignItems: 'center', gap: 3.5, mt: { xs: 4, sm: 5, md: 6 } }}>
              {/* Primary Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
              >
                <ButtonAnimationWrapper>
                  <Button
                    color="primary"
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="text.primary" />}
                    {...primaryBtn}
                    sx={{ 
                      px: 4, 
                      py: 1.5, 
                      fontSize: '1rem', 
                      fontWeight: 700, 
                      borderRadius: 2,
                      bgcolor: 'grey.200',
                      color: 'grey.900',
                      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.08)',
                      '&:hover': {
                        bgcolor: 'common.white',
                        color: 'common.black',
                        boxShadow: '0 6px 18px rgba(255, 255, 255, 0.2)'
                      }
                    }}
                  />
                </ButtonAnimationWrapper>
              </motion.div>

              {/* Specialities Chips Grid */}
              <Stack direction="row" sx={{ gap: 1.25, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 850 }}>
                {listData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: 'linear' }}
                  >
                    <Chip
                      label={item.title}
                      variant="outlined"
                      icon={<GraphicsImage image={item.image} sx={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} />}
                      slotProps={{ label: { sx: { py: 0.75, px: 1, typography: 'caption2', color: 'common.white', fontWeight: 500 } } }}
                      sx={{ 
                        height: 38, 
                        px: 1.5, 
                        bgcolor: 'rgba(255, 255, 255, 0.06)', 
                        borderColor: 'rgba(255, 255, 255, 0.12)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.12)',
                          borderColor: 'rgba(255, 255, 255, 0.25)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </ContainerWrapper>
    </Box>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  listData: PropTypes.array
};
