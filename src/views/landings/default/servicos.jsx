// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { FeatureServices, FeatureWhyUs } from '@/blocks/feature';
import { CtaContact } from '@/blocks/cta';
import { Faq } from '@/blocks/faq';
import SectionHero from '@/components/SectionHero';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

// @data
import { featureServices, featureWhyUs, ctaContact, faq } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Serviços' }
];

const businessSegments = [
  {
    icon: 'tabler-seeding',
    profile: 'Simples Nacional',
    description: 'Empresas em crescimento que precisam avaliar o momento certo de migração de regime e evitar excesso de carga tributária.',
    services: 'Planejamento Tributário e Contabilidade Consultiva'
  },
  {
    icon: 'tabler-building-store',
    profile: 'Lucro Presumido',
    description: 'Negócios de médio porte com margens elevadas, onde a análise do enquadramento ideal gera economia direta no caixa.',
    services: 'Planejamento Tributário, Revisão Fiscal e BPO Financeiro'
  },
  {
    icon: 'tabler-building-skyscraper',
    profile: 'Lucro Real',
    description: 'Grandes operações e grupos econômicos com apuração complexa, alto volume de créditos e necessidade de auditoria contínua.',
    services: 'Recuperação de Créditos, Gestão de Passivos e Defesas'
  },
  {
    icon: 'tabler-home-dollar',
    profile: 'Holdings Patrimoniais',
    description: 'Famílias e grupos empresariais que buscam proteção patrimonial, sucessão organizada e eficiência tributária de longo prazo.',
    services: 'Planejamento Societário e Gestão de Passivos e Defesas'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico & Análise Fiscal',
    description: 'Mapeamos a situação fiscal, contábil e tributária atual da sua empresa sem compromisso, identificando gargalos, riscos e oportunidades imediatas de economia.',
    icon: 'tabler-search'
  },
  {
    step: '02',
    title: 'Planejamento & Proposta',
    description: 'Elaboramos uma estratégia personalizada com a projeção real de redução de custos fiscais, cronograma de implementação e proposta orçamentária transparente.',
    icon: 'tabler-file-analytics'
  },
  {
    step: '03',
    title: 'Execução & Implementação Segura',
    description: 'Nossa equipe de peritos e contadores conduz a execução operacional, reorganização tributária e restituição de valores com 100% de amparo na legislação.',
    icon: 'tabler-settings-automation'
  },
  {
    step: '04',
    title: 'Acompanhamento & Resultados',
    description: 'Fornecemos suporte estratégico contínuo, relatórios periódicos de desempenho e blindagem contínua contra mudanças na legislação fiscal.',
    icon: 'tabler-chart-dots-filled'
  }
];

export default function Servicos() {
  return (
    <>
      <SectionHero heading="Nossos Serviços" breadcrumbs={breadcrumbs} search={false} />
      
      {/* Overview Services Grid */}
      <FeatureServices {...featureServices} />
      
      {/* Detailed Specialties Tabs */}
      <FeatureWhyUs {...featureWhyUs} />

      {/* Segmentos Atendidos */}
      <ContainerWrapper sx={{ py: { xs: 6, md: 10 } }}>
        <Stack sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 5, md: 7 }, gap: 1.5 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Qual o Enquadramento da Sua Empresa?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, lineHeight: 1.7 }}>
            Cada regime tributário e perfil societário exige uma combinação diferente dos nossos serviços. Veja onde sua empresa se encaixa.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {businessSegments.map((item, idx) => (
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
                    {item.profile}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#00b4d8', fontWeight: 600, mt: 'auto' }}>
                    {item.services}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContainerWrapper>

      {/* Process / How It Works Section */}
      <Box sx={{ bgcolor: '#121212', color: 'common.white', py: { xs: 8, md: 12 }, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <ContainerWrapper>
          <Stack sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 6, md: 9 }, gap: 1.5 }}>
            <Box
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 5,
                bgcolor: 'rgba(0, 180, 216, 0.15)',
                color: '#00b4d8',
                fontSize: '0.875rem',
                fontWeight: 600
              }}
            >
              Passo a Passo da Consultoria
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, color: 'common.white' }}>
              Como Funciona a Parceria com a BNA Contábil
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.400', maxWidth: 680, lineHeight: 1.7 }}>
              Um método estruturado, transparente e seguro para transformar a gestão financeira e tributária do seu negócio do diagnóstico aos resultados.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {processSteps.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3.5,
                    borderRadius: 3.5,
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: '#00b4d8',
                      boxShadow: '0 12px 30px -10px rgba(0, 180, 216, 0.3)'
                    }
                  }}
                >
                  <Stack sx={{ gap: 2.5, height: '100%', position: 'relative', zIndex: 1 }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 3,
                          bgcolor: 'rgba(0, 180, 216, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#00b4d8'
                        }}
                      >
                        <SvgIcon name={item.icon} size={26} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: 'rgba(255, 255, 255, 0.15)',
                          letterSpacing: 1
                        }}
                      >
                        {item.step}
                      </Typography>
                    </Stack>

                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'common.white' }}>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ContainerWrapper>
      </Box>

      {/* Perguntas Frequentes */}
      <Faq {...faq} />

      {/* Call to Action */}
      <CtaContact {...ctaContact} />
    </>
  );
}
