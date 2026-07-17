'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  ABOUT SUMMARY  ***************************/

export default function AboutSummary({ heading, label, caption, features, actionBtn, images }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  // Parallelogram clip-path inspired by the BNA logo diagonal slanted lines
  // Left image: slants top-right to bottom-left
  const clipLeft = 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)';
  // Right image: slants top-left to bottom-right
  const clipRight = 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)';

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
        {/* Left Column - Masked Images */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1, sm: 1.5 },
                position: 'relative',
                height: { xs: 320, sm: 400, md: 480 }
              }}
            >
              {/* Left parallelogram image */}
              <Box
                sx={{
                  flex: 1,
                  position: 'relative',
                  clipPath: clipLeft,
                  borderRadius: 0,
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={images?.[0] || '/assets/images/about-1.jpg'}
                  alt="BNA Consultoria - Equipe"
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* Subtle overlay caption on left image */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2, sm: 3 },
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)'
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 500 }}>
                    Solidez jurídica e inteligência fiscal.
                  </Typography>
                </Box>
              </Box>

              {/* Right parallelogram image */}
              <Box
                sx={{
                  flex: 1,
                  position: 'relative',
                  clipPath: clipRight,
                  borderRadius: 0,
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={images?.[1] || '/assets/images/about-2.jpg'}
                  alt="BNA Consultoria - Consultoria"
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Column - Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Stack sx={{ gap: { xs: 2.5, sm: 3 } }}>
              {/* Label */}
              {label && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    fontWeight: 700
                  }}
                >
                  {label}
                </Typography>
              )}

              {/* Heading */}
              {heading && (
                <Typography variant="h2" sx={{ fontWeight: 700 }}>
                  {heading}
                </Typography>
              )}

              {/* Description */}
              {caption && (
                <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560 }}>
                  {caption}
                </Typography>
              )}

              {/* Feature Items */}
              {features && features.length > 0 && (
                <Stack sx={{ gap: { xs: 2.5, sm: 3 }, mt: 1 }}>
                  {features.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                    >
                      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
                        <Avatar
                          sx={{
                            width: 48,
                            height: 48,
                            bgcolor: 'primary.lighter',
                            flexShrink: 0
                          }}
                        >
                          <SvgIcon name={item.icon} size={22} />
                        </Avatar>
                        <Stack sx={{ gap: 0.5 }}>
                          <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                          </Typography>
                        </Stack>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>
              )}

              {/* Action Button */}
              {actionBtn && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <Box sx={{ mt: 1 }}>
                    <ButtonAnimationWrapper>
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                        {...actionBtn}
                      />
                    </ButtonAnimationWrapper>
                  </Box>
                </motion.div>
              )}
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

AboutSummary.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  caption: PropTypes.string,
  features: PropTypes.array,
  actionBtn: PropTypes.any,
  images: PropTypes.array
};
