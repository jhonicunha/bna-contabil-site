'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import SectionHero from '@/components/SectionHero';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { Partners } from '@/blocks/other';
import { CtaContact } from '@/blocks/cta';
import { partners, ctaContact } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Quem Somos' }
];

const historyMilestones = [
  {
    period: 'Ano a confirmar',
    confirmed: false,
    icon: 'tabler-building-bank',
    title: 'Fundação da BNA Consultoria',
    description: 'Fundação da BNA Consultoria, empresa parceira especializada em tributário e jurídico.'
  },
  {
    period: 'Julho de 2026',
    confirmed: true,
    icon: 'tabler-users-plus',
    title: 'Nasce a BNA Contábil',
    description: 'Entrada do sócio Paulo Cunha, Contador, iniciando a operação da BNA Contábil com foco 100% em contabilidade consultiva e BPO contábil.'
  },
  {
    period: '2026',
    confirmed: true,
    icon: 'tabler-world',
    title: 'Nova Plataforma Digital',
    description: 'Lançamento do novo site institucional bnacontabil.com.br, estruturado em tecnologia moderna e preparado para evoluir com a empresa.'
  },
  {
    period: 'Em breve',
    confirmed: true,
    icon: 'tabler-rocket',
    title: 'Área do Cliente Digital',
    description: 'Fase 2 do projeto: portal seguro para upload e download de documentos contábeis, guias e relatórios.'
  }
];

const segments = [
  {
    icon: 'tabler-building-store',
    title: 'Comércio',
    description: 'Varejo e atacado que precisam de uma rotina contábil e fiscal organizada e ágil.'
  },
  {
    icon: 'tabler-building-factory-2',
    title: 'Indústria',
    description: 'Operações com apuração de custos e organização contábil de processos mais complexos.'
  },
  {
    icon: 'tabler-briefcase-2',
    title: 'Prestadores de Serviços',
    description: 'Empresas de serviços que precisam de departamento pessoal e faturamento sempre em dia.'
  },
  {
    icon: 'tabler-chart-arrows-vertical',
    title: 'Pequenas e Médias Empresas em Crescimento',
    description: 'Negócios que precisam de BPO contábil para escalar com organização e segurança.'
  }
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
                A <strong>BNA Contábil</strong> nasceu para oferecer contabilidade consultiva e BPO contábil a empresas que querem uma gestão financeira organizada, tecnológica e confiável. Liderada pelo contador <strong>Paulo Cunha</strong>, unimos precisão técnica em contabilidade e perícia contábil com atendimento próximo e humano.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Cuidamos da rotina contábil, fiscal e de departamento pessoal da sua empresa, para que você possa focar no crescimento do seu negócio com tranquilidade e segurança.
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
                        Prover contabilidade estratégica e conformidade fiscal com precisão técnica, gerando organização e tranquilidade para os negócios que atendemos.
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
                        Ser referência em contabilidade consultiva e BPO contábil, reconhecida pela excelência técnica e proximidade com o cliente.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </ContainerWrapper>

      {/* Nossa História / Timeline Section */}
      <ContainerWrapper sx={{ py: { xs: 6, md: 10 } }}>
        <Stack sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 5, md: 7 }, gap: 1.5 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Nossa História
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, lineHeight: 1.7 }}>
            Uma trajetória em evolução constante rumo a uma contabilidade estratégica e digital.
          </Typography>
        </Stack>

        <Stack sx={{ gap: 0 }}>
          {historyMilestones.map((item, idx) => (
            <Stack key={idx} direction="row" sx={{ gap: { xs: 2, sm: 3 } }}>
              <Stack sx={{ alignItems: 'center', flexShrink: 0 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 180, 216, 0.1)',
                    color: '#00b4d8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <SvgIcon name={item.icon} size={22} />
                </Box>
                {idx < historyMilestones.length - 1 && <Box sx={{ width: '2px', flexGrow: 1, bgcolor: 'grey.200', my: 0.5 }} />}
              </Stack>
              <Stack sx={{ gap: 0.75, pb: { xs: 4, sm: 5 } }}>
                <Stack direction="row" sx={{ gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="subtitle2" sx={{ color: '#00b4d8', fontWeight: 700 }}>
                    {item.period}
                  </Typography>
                  {!item.confirmed && <Chip label="Data a confirmar" size="small" color="warning" variant="outlined" />}
                </Stack>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, maxWidth: 620 }}>
                  {item.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
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
                title: 'Excelência Técnica Contábil',
                description: 'Nossas rotinas contábeis são alinhadas à legislação vigente e conduzidas com rigor técnico em cada etapa.'
              },
              {
                icon: 'tabler-user-check',
                title: 'Atendimento Consultivo Direto',
                description: 'Relacionamento transparente e acompanhamento próximo conduzido diretamente pela equipe especializada.'
              },
              {
                icon: 'tabler-cpu',
                title: 'Tecnologia Aplicada à Contabilidade',
                description: 'Uso de sistemas avançados para conferência de dados, agilidade na rotina contábil e menos erros manuais.'
              },
              {
                icon: 'tabler-shield-lock',
                title: 'Compliance e Conformidade Fiscal',
                description: 'Soluções voltadas para manter sua empresa sempre em dia com obrigações contábeis, fiscais e trabalhistas.'
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

      {/* Segmentos que Atendemos */}
      <ContainerWrapper sx={{ py: { xs: 6, md: 10 } }}>
        <Stack sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 5, md: 7 }, gap: 1.5 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Segmentos que Atendemos
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, lineHeight: 1.7 }}>
            Da pequena à média empresa, atuamos com profundidade técnica nos setores que mais precisam de uma contabilidade organizada.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {segments.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Card sx={{ height: '100%', p: 3, borderRadius: 3, border: '1px solid', borderColor: 'grey.200' }}>
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

      {/* Partners Section (Sócios Fundadores) */}
      <Partners {...partners} />

      {/* Call to Action */}
      <CtaContact {...ctaContact} />
    </>
  );
}
