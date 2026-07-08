'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { DOCS_URL, FREEBIES_URL } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 7 DATA  ***************************/

/**
 *
 * Demos:
 * - [Footer7](https://www.soflinc.com.br/blocks/footer/footer7)
 */

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const data = [
  {
    id: 'institucional',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Navegação',
    menu: [
      { label: 'Início', link: { href: '/' } },
      { label: 'Serviços', link: { href: '#servicos' } },
      { label: 'Sócios', link: { href: '#socios' } },
      { label: 'Perguntas Frequentes', link: { href: '#faq' } },
      { label: 'Contato', link: { href: '#contato' } }
    ]
  },
  {
    id: 'links_uteis',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Links Úteis',
    menu: [
      { label: 'BNA Advocacia', link: { href: 'https://bnaconsultoria.com.br', ...linkProps } },
      { label: 'Receita Federal', link: { href: 'https://www.gov.br/receitafederal', ...linkProps } },
      { label: 'Conselho de Contabilidade (CRC-PR)', link: { href: 'https://www.crcpr.org.br', ...linkProps } },
      { label: 'Portal do Simples Nacional', link: { href: 'https://www8.receita.fazenda.gov.br/SimplesNacional', ...linkProps } }
    ]
  }
];

const iconProps = { color: 'text.secondary' };

const usefullLinks = [
  {
    icon: <SvgIcon name="tabler-phone" {...iconProps} />,
    title: '+55 41 99977-5191',
    href: 'tel:5541999775191'
  },
  {
    icon: <SvgIcon name="tabler-mail" {...iconProps} />,
    title: 'contato@bnaconsultoria.com.br',
    href: 'mailto:contato@bnaconsultoria.com.br'
  },
  {
    icon: <SvgIcon name="tabler-map-pin" {...iconProps} />,
    title: 'Av. Visconde de Guarapuava, 4628 Sala 709 - Batel, Curitiba/PR',
    href: 'https://maps.google.com/maps?q=Avenida%20Visconde%20de%20Guarapuava.%204628%20Sala%20709%20Ala%20Office%20CEP%2080240-010%20Batel%20Curitiba%20Paran%C3%A1'
  }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="body2" sx={{ maxWidth: { sm: 300 }, mt: 2 }}>
        Inteligência fiscal e contabilidade estratégica aliadas à solidez e excelência jurídica da BNA Consultoria.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent}
                <Stack sx={{ gap: { xs: 2, sm: 2.5, md: 3 } }}>
                  {usefullLinks.map((item, index) => (
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link
                        component={NextLink}
                        variant="body2"
                        color="text.secondary"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Usefull Links"
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </Stack>
      </motion.div>
    </ContainerWrapper>
  );
}
