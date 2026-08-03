'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// @project
import { ContactUs4 } from '@/blocks/contact-us';
import { CtaContact } from '@/blocks/cta';
import SectionHero from '@/components/SectionHero';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

// @data
import { contactUS, careers, ctaContact } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Contato' }
];

export default function Contato() {
  return (
    <>
      <SectionHero heading="Entre em Contato" breadcrumbs={breadcrumbs} search={false} />
      <ContactUs4 {...contactUS} showForm={false} />

      {/* Junte-se à Nossa Equipe (Carreiras) */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 8, md: 12 }, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'grey.200' }}>
        <ContainerWrapper>
          <Stack sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 5, md: 7 }, gap: 1.5 }}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              {careers.heading}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, lineHeight: 1.7 }}>
              {careers.caption}
            </Typography>
          </Stack>

          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {careers.other.map((job, idx) => (
              <Grid size={{ xs: 12, sm: 8, md: 6 }} key={idx}>
                <Card sx={{ height: '100%', p: 3.5, borderRadius: 3, border: '1px solid', borderColor: 'grey.200' }}>
                  <Stack sx={{ gap: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {job.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {job.description}
                    </Typography>
                    <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
                      {job.chips.map((chip, chipIdx) => (
                        <Chip key={chipIdx} icon={<SvgIcon name={chip.icon} size={16} />} label={chip.name} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </Stack>
                  <CardActions sx={{ px: 0, pt: 2.5 }}>
                    <Button variant="contained" {...job.btn} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ContainerWrapper>
      </Box>

      <CtaContact {...ctaContact} />
    </>
  );
}
