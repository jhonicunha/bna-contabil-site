'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'motion/react';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  ABOUT SUMMARY  ***************************/

export default function AboutSummary({ heading, label, caption, features, images }) {
  const theme = useTheme();

  const imageSrc = images?.[0] || '/assets/images/about-1.jpg';

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
        {/* Left Column - BNA Logo Symbol Masked Image */}
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
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: 360, sm: 420, md: 480 },
                aspectRatio: '156/288',
                mx: 'auto'
              }}
            >
              <svg
                viewBox="0 0 156 288"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                <defs>
                  <pattern
                    id="bna-image-pattern"
                    patternUnits="userSpaceOnUse"
                    width="156"
                    height="288"
                  >
                    <image
                      href={imageSrc}
                      x="0"
                      y="0"
                      width="156"
                      height="288"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                </defs>
                <g transform="translate(-11.16 -13.75)">
                  {/* Left slanted line */}
                  <path
                    fill="url(#bna-image-pattern)"
                    d="M89.82,264.69,167,112.38a5.14,5.14,0,0,0,.63-2,4.06,4.06,0,0,0-.5-2.1L143,67,24.58,293.23s-5.35,8.5,6.38,8.49H85.44A27.75,27.75,0,0,1,83,291.22c-.46-8.63,2.28-17.55,6.72-26.38Z"
                  />
                  {/* Right slanted line */}
                  <path
                    fill="url(#bna-image-pattern)"
                    d="M89,50.8,11.8,203.11a5,5,0,0,0-.64,2,4,4,0,0,0,.51,2.1l24.17,41.22L154.22,22.26s5.34-8.51-6.39-8.49l-54.48,0a27.8,27.8,0,0,1,2.43,10.52c.46,8.63-2.28,17.55-6.72,26.37Z"
                  />
                </g>
              </svg>
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
  images: PropTypes.array
};
