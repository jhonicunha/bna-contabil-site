// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'grey.400' }}>
          BNA Contábil
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Contabilidade & BPO
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
        />
      </>
    )
  },
  headLine: 'Contabilidade Estratégica para Impulsionar o seu Negócio',
  captionLine: 'Cuidamos da contabilidade, do BPO contábil e do departamento pessoal da sua empresa com precisão técnica e tecnologia, para você focar no crescimento do seu negócio.',
  primaryBtn: {
    children: 'Falar com um Especialista',
    href: 'https://wa.me/5541998910163',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  videoSrc: '',
  videoThumbnail: '/assets/images/bna_hero_building.png',
  listData: [
    { image: '/assets/images/shared/chart.svg', title: 'BPO Contábil' },
    { image: '/assets/images/shared/money.svg', title: 'Departamento Pessoal' },
    { image: '/assets/images/shared/check.svg', title: 'Contabilidade Consultiva' },
    { image: '/assets/images/shared/shield.svg', title: 'Abertura de Empresas' }
  ]
};
