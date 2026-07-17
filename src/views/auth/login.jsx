'use client';

import { useState } from 'react';
// @next
import NextLink from 'next/link';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// @project
import Logo from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';
import branding from '@/branding.json';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

export default function LoginView() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only for now
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Left side panel - Branding & Features */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '50%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          bgcolor: 'grey.900',
          color: 'common.white',
          p: 6,
          position: 'relative',
          ...getBackgroundDots(theme.vars.palette.grey[800], 1.5, 30)
        }}
      >
        <Stack sx={{ gap: 4, zIndex: 1 }}>
          <Logo sx={{ '& path': { fill: '#fff' } }} /> {/* White logo styling */}
          <Stack sx={{ gap: 2, mt: 8 }}>
            <Typography variant="h1" sx={{ color: 'common.white', fontWeight: 700, lineHeight: 1.2 }}>
              Inteligência Fiscal &<br />Contabilidade Estratégica
            </Typography>
            <Typography variant="h5" sx={{ color: 'grey.400', fontWeight: 400, maxWidth: 500 }}>
              Gerencie seus documentos contábeis e fiscais com facilidade e total segurança jurídica.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: 3, mt: 4, zIndex: 1 }}>
          <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
            <Box sx={{ p: 1, bgcolor: 'grey.800', borderRadius: 2, color: 'primary.light' }}>
              <SvgIcon name="tabler-file-analytics" size={20} />
            </Box>
            <Typography variant="body1" sx={{ color: 'grey.300' }}>
              Upload e download seguro de guias e relatórios mensais.
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
            <Box sx={{ p: 1, bgcolor: 'grey.800', borderRadius: 2, color: 'primary.light' }}>
              <SvgIcon name="tabler-shield-check" size={20} />
            </Box>
            <Typography variant="body1" sx={{ color: 'grey.300' }}>
              Ambiente de alta criptografia em total conformidade com a LGPD.
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
            <Box sx={{ p: 1, bgcolor: 'grey.800', borderRadius: 2, color: 'primary.light' }}>
              <SvgIcon name="tabler-message-chatbot" size={20} />
            </Box>
            <Typography variant="body1" sx={{ color: 'grey.300' }}>
              Canal de comunicação direto com peritos tributários e contadores.
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ zIndex: 1 }}>
          <Typography variant="caption" sx={{ color: 'grey.500' }}>
            © {new Date().getFullYear()} {branding.company.name}. Todos os direitos reservados.
          </Typography>
        </Box>
      </Box>

      {/* Right side panel - Login Form */}
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '50%' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.50',
          p: { xs: 3, sm: 6 }
        }}
      >
        <Card sx={{ 
          maxWidth: 500, 
          width: 1, 
          boxShadow: 'none', 
          border: '1px solid', 
          borderColor: 'grey.200', 
          borderRadius: 4,
          p: { xs: 2, sm: 4 }
        }}>
          <CardContent sx={{ p: 0 }}>
            {/* Mobile Logo */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
              <Logo />
            </Box>

            <Stack sx={{ gap: 1, mb: 4 }}>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Área do Cliente
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Entre com seu usuário/CPF e senha para acessar o portal contábil.
              </Typography>
            </Stack>

            <form onSubmit={handleSubmit}>
              <Stack sx={{ gap: 3 }}>
                <TextField
                  fullWidth
                  label="E-mail ou CPF"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com ou 000.000.000-00"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon name="tabler-mail" size={20} color="grey.500" />
                        </InputAdornment>
                      )
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Senha"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon name="tabler-lock" size={20} color="grey.500" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword} edge="end">
                            <SvgIcon name={showPassword ? 'tabler-eye-off' : 'tabler-eye'} size={20} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />

                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={<Typography variant="body2">Lembrar de mim</Typography>}
                  />
                  <Link
                    component={NextLink}
                    href="#"
                    variant="body2"
                    color="primary.main"
                    underline="hover"
                    sx={{ fontWeight: 500 }}
                  >
                    Esqueceu a senha?
                  </Link>
                </Stack>

                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ py: 1.5, borderRadius: 2, fontWeight: 600, fontSize: '0.95rem' }}
                >
                  Entrar
                </Button>
              </Stack>
            </form>

            <Stack sx={{ gap: 2, mt: 4, alignItems: 'center' }}>
              <Link
                component={NextLink}
                href="/"
                variant="body2"
                color="text.secondary"
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                <SvgIcon name="tabler-arrow-narrow-left" size={18} />
                Voltar para o site institucional
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
