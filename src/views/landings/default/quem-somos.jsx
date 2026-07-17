'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// @project
import SectionHero from '@/components/SectionHero';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import branding from '@/branding.json';
import { Other1 } from '@/blocks/other';
import { other } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Quem Somos' }
];

export default function QuemSomos() {
  return (
    <>
      <SectionHero heading="Quem Somos" breadcrumbs={breadcrumbs} search={false} />

      {/* About Section */}
      <ContainerWrapper sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Stack sx={{ gap: 3 }}>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Sobre a BNA Contábil
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nascemos da união estratégica entre a sólida bagagem jurídica da <strong>BNA Consultoria</strong> e a alta precisão técnica em contabilidade e perícia do sócio <strong>Paulo Cunha</strong>. Essa fusão nos permite oferecer soluções que vão além do convencional, integrando inteligência tributária e contabilidade estratégica para impulsionar o crescimento do seu negócio.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Atuamos de forma consultiva, analisando cenários operacionais complexos para reduzir custos tributários de forma legal e segura, gerando fluxo de caixa e blindando o patrimônio empresarial de nossos clientes.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack sx={{ gap: 2.5 }}>
              <Card sx={{ bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200', borderRadius: 3 }}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1, bgcolor: 'primary.lighter', borderRadius: 2, color: 'primary.main' }}>
                      <SvgIcon name="tabler-target-arrow" size={24} />
                    </Box>
                    <Stack sx={{ gap: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>Missão</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Prover inteligência contábil e conformidade fiscal com segurança jurídica, gerando valor real e sustentabilidade para os negócios.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200', borderRadius: 3 }}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1, bgcolor: 'primary.lighter', borderRadius: 2, color: 'primary.main' }}>
                      <SvgIcon name="tabler-eye" size={24} />
                    </Box>
                    <Stack sx={{ gap: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>Visão</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Ser referência nacional em contabilidade estratégica e perícia tributária, reconhecida pela excelência técnica e proximidade com o cliente.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </ContainerWrapper>

      {/* Partners Section (Sócios Fundadores) */}
      <Other1 {...other} />
    </>
  );
}
