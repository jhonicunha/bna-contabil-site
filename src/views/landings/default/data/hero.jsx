// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'grey.400' }}>
          BNA Consultoria
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Tributária & Contábil
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
        />
      </>
    )
  },
  headLine: 'Inteligência Fiscal e Contabilidade Estratégica para o seu Negócio',
  captionLine: 'Unimos a solidez jurídica da BNA Consultoria à precisão contábil para gerar caixa, reduzir impostos legalmente e proteger o patrimônio da sua empresa.',
  primaryBtn: { 
    children: 'Falar com um Especialista', 
    href: 'https://wa.me/5541999775191',
    target: '_blank', 
    rel: 'noopener noreferrer'
  },
  videoSrc: '',
  videoThumbnail: '/assets/images/bna_hero_building.png',
  listData: [
    { image: '/assets/images/shared/chart.svg', title: 'Planejamento Tributário' },
    { image: '/assets/images/shared/money.svg', title: 'Recuperação de Créditos' },
    { image: '/assets/images/shared/check.svg', title: 'Revisão Fiscal' },
    { image: '/assets/images/shared/shield.svg', title: 'Gestão de Passivos' }
  ]
};
