'use client';
import { useState } from 'react';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// @third-party
import { motion } from 'motion/react';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CALL TO ACTION / CONTACT  ***************************/

export default function CtaContact({ heading, caption, label }) {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', whatsapp: '', message: '' });
    }, 1200);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          
          {/* Left Column - Contact Info and Map */}
          <Grid size={{ xs: 12, md: 6 }}>
            <GraphicsCard sx={{ height: '100%', p: { xs: 3, sm: 4, md: 6 } }}>
              <Stack sx={{ gap: 3, height: '100%', justifyContent: 'space-between' }}>
                <Stack sx={{ gap: 2.5 }}>
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={label || 'Contato'}
                      variant="outlined"
                      slotProps={{ label: { sx: { py: 0.75, px: 2, typography: 'caption', color: 'primary.main' } } }}
                      sx={{ borderColor: 'primary.light' }}
                    />
                    <Divider sx={{ width: 60, borderBottomWidth: 2, borderColor: 'primary.light' }} />
                  </Stack>
                  <Typeset {...{ heading, caption, captionProps: { sx: { maxWidth: '100%' } } }} />
                </Stack>

                {/* Google Map Iframe pointing to Curitiba */}
                {/* Direct Action Buttons */}
                <Stack direction="column" spacing={1.5} sx={{ width: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SvgIcon name="tabler-brand-whatsapp" size={18} color="common.white" />}
                    href="https://wa.me/5541998910163"
                    target="_blank"
                    sx={{ py: 1.25, borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                  >
                    (41) 99891-0163
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SvgIcon name="tabler-mail" size={18} color="common.white" />}
                    href="mailto:contato@bnaconsultoria.com.br"
                    sx={{ py: 1.25, borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                  >
                    contato@bnaconsultoria.com.br
                  </Button>
                </Stack>

                {/* Google Map pointing to the Visconde de Guarapuava address */}
                <Stack sx={{ gap: 1.5 }}>
                  <Typography component="div" variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SvgIcon name="tabler-map-pin" size={18} color="#00b4d8" />
                    Av. Visconde de Guarapuava, 4628 Sala 709 - Batel, Curitiba/PR
                  </Typography>
                  {/* Map Graphic Container */}
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 220, sm: 240 },
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: 'grey.300',
                      position: 'relative',
                      backgroundImage: 'url(/assets/images/map_curitiba.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Google Maps Full Address Button */}
                    <Button
                      variant="contained"
                      size="small"
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Visconde+de+Guarapuava,+4628+-+Batel,+Curitiba+-+PR,+80240-010"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<SvgIcon name="tabler-map-pin" size={16} color="common.white" />}
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        bgcolor: 'rgba(18, 18, 18, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: '#fff',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        py: 0.75,
                        px: 2,
                        borderRadius: 50,
                        textTransform: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                        '&:hover': {
                          bgcolor: '#00b4d8',
                          borderColor: '#00b4d8'
                        }
                      }}
                    >
                      Abrir no Google Maps
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </GraphicsCard>
          </Grid>

          {/* Right Column - Contact Form Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <GraphicsCard sx={{ p: { xs: 3, sm: 4, md: 6 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {submitted ? (
                <Stack sx={{ alignItems: 'center', textAlign: 'center', py: 4, gap: 2 }}>
                  <Box sx={{ p: 2, bgcolor: 'primary.lighter', borderRadius: '50%', color: 'primary.main', display: 'flex' }}>
                    <SvgIcon name="tabler-circle-check" size={36} />
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>Mensagem Enviada!</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 320 }}>
                    Agradecemos o contato. Nossa equipe analisará sua solicitação e retornará o mais breve possível.
                  </Typography>
                  <Button variant="outlined" color="primary" onClick={() => setSubmitted(false)} sx={{ mt: 2 }}>
                    Enviar Nova Mensagem
                  </Button>
                </Stack>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                  <Stack sx={{ gap: 2.5 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>Envie uma Mensagem</Typography>

                    <TextField
                      label="Nome Completo"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      size="medium"
                      slotProps={{ input: { sx: { borderRadius: 2 } } }}
                    />

                    <TextField
                      label="E-mail Corporativo"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      size="medium"
                      slotProps={{ input: { sx: { borderRadius: 2 } } }}
                    />

                    <TextField
                      label="Telefone / WhatsApp"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      size="medium"
                      slotProps={{ input: { sx: { borderRadius: 2 } } }}
                    />

                    <TextField
                      label="Como podemos ajudar seu negócio?"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      size="medium"
                      slotProps={{ input: { sx: { borderRadius: 2 } } }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      sx={{ py: 1.5, mt: 1, fontWeight: 600, borderRadius: 2 }}
                    >
                      {loading ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </Stack>
                </Box>
              )}
            </GraphicsCard>
          </Grid>

        </Grid>
      </motion.div>
    </ContainerWrapper>
  );
}

CtaContact.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  label: PropTypes.string
};
