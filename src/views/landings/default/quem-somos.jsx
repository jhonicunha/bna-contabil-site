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
import { Partners } from '@/blocks/other';
import { partners } from './data';

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
          <Grid size={{ xs: 12, md: 6 }}>
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
          <Grid size={{ xs: 12, md: 6 }}>
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

      {/* Differentials / Pilares Section */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 8, md: 12 }, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'grey.200' }}>
        <ContainerWrapper>
          <Stack sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 5, md: 8 }, gap: 1.5 }}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Por que Escolher a BNA Contábil?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, lineHeight: 1.7 }}>
              Combinamos visão estratégica, tecnologia e excelência técnica para transformar a contabilidade da sua empresa em um ativo gerador de resultados.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {[
              {
                icon: 'tabler-scale',
                title: 'Solidez Jurídico-Tributária',
                description: 'Nossas estratégias contábeis são alinhadas à legislação vigente e fundamentadas na ampla bagagem jurídica da BNA Consultoria.'
              },
              {
                icon: 'tabler-user-check',
                title: 'Atendimento Consultivo Direto',
                description: 'Relacionamento transparente e acompanhamento próximo conduzido diretamente pelos sócios especialistas e peritos.'
              },
              {
                icon: 'tabler-cpu',
                title: 'Tecnologia & Auditoria Fiscal',
                description: 'Uso de sistemas avançados para cruzamento de dados tributários, recuperação de créditos e prevenção de passivos.'
              },
              {
                icon: 'tabler-shield-lock',
                title: 'Proteção Patrimonial & Compliance',
                description: 'Soluções voltadas para a segurança dos sócios, blindagem de patrimônio e adequação contínua às normas fiscais.'
              }
            ].map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 24px -10px rgba(0, 180, 216, 0.25)',
                      borderColor: '#00b4d8'
                    }
                  }}
                >
                  <Stack sx={{ gap: 2, height: '100%' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2.5,
                        bgcolor: 'rgba(0, 180, 216, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00b4d8'
                      }}
                    >
                      <SvgIcon name={item.icon} size={26} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ContainerWrapper>
      </Box>

      {/* Partners Section (Sócios Fundadores) */}
      <Partners {...partners} />
    </>
  );
}
