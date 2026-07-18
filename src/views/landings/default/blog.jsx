'use client';

import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import { CtaContact } from '@/blocks/cta';
import SvgIcon from '@/components/SvgIcon';

// @data
import { ctaContact } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Blog' }
];

const blogPosts = [
  {
    id: 1,
    title: 'Planejamento Tributário para 2027: O Guia Definitivo para Sua Empresa',
    excerpt: 'Descubra como estruturar seu regime tributário e aproveitar incentivos legais para reduzir drasticamente a carga de impostos no próximo ano.',
    category: 'Planejamento Tributário',
    date: '18 Julho, 2026',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Recuperação de Créditos: O Caixa Escondido na Contabilidade do Seu Negócio',
    excerpt: 'Muitas empresas pagam impostos a maior sem saber. Saiba como identificar e reaver créditos tributários de forma administrativa e segura.',
    category: 'Recuperação de Créditos',
    date: '15 Julho, 2026',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Como a Gestão de Passivos Evita Autuações Fiscais Graves',
    excerpt: 'Entenda os principais riscos na declaração de obrigações acessórias e como auditorias internas regulares evitam multas da Receita Federal.',
    category: 'Gestão de Passivos',
    date: '10 Julho, 2026',
    readTime: '4 min de leitura',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Revisão Fiscal Periódica: O Escudo Contra Passivos Ocultos',
    excerpt: 'Análise detalhada de como a revisão dos processos tributários anteriores identifica gargalos fiscais e protege o patrimônio dos sócios.',
    category: 'Revisão Fiscal',
    date: '05 Julho, 2026',
    readTime: '7 min de leitura',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Holding Familiar: Proteção Patrimonial e Sucessão Eficiente',
    excerpt: 'Conheça as vantagens fiscais e corporativas de organizar o patrimônio familiar através de uma estrutura societária sob medida.',
    category: 'Planejamento Tributário',
    date: '28 Junho, 2026',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1520607117444-187911139047?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Novas Regras da Reforma Tributária: O que muda e como se preparar',
    excerpt: 'O cronograma de transição dos novos impostos está avançando. Prepare sua equipe contábil para as principais mudanças operacionais.',
    category: 'Legislação',
    date: '20 Junho, 2026',
    readTime: '8 min de leitura',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  }
];

const categories = ['Todos', 'Planejamento Tributário', 'Recuperação de Créditos', 'Gestão de Passivos', 'Revisão Fiscal', 'Legislação'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = selectedCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <SectionHero heading="Nosso Blog" breadcrumbs={breadcrumbs} search={false} />

      <ContainerWrapper sx={{ py: { xs: 6, sm: 8 } }}>
        <Stack sx={{ gap: 4 }}>
          {/* Category Filter Badges */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              overflowX: 'auto',
              pb: 1.5,
              '&::-webkit-scrollbar': { height: 6 },
              '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.300', borderRadius: 3 }
            }}
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  cursor: 'pointer',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  bgcolor: selectedCategory === cat ? 'primary.main' : 'grey.100',
                  color: selectedCategory === cat ? 'common.white' : 'text.primary',
                  '&:hover': {
                    bgcolor: selectedCategory === cat ? 'primary.dark' : 'grey.200'
                  }
                }}
              />
            ))}
          </Stack>

          {/* Blog Cards Grid */}
          <Grid container spacing={4}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'scale(1.04)' }
                      }}
                    />
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        bgcolor: '#699ac5',
                        color: 'common.white',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, gap: 2 }}>
                    <Stack direction="row" spacing={2} sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      <Typography variant="caption">{post.date}</Typography>
                      <Typography variant="caption">•</Typography>
                      <Typography variant="caption">{post.readTime}</Typography>
                    </Stack>

                    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4 }}>
                      {post.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1, lineHeight: 1.6 }}>
                      {post.excerpt}
                    </Typography>

                    <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'grey.100' }}>
                      <Link
                        href={`https://wa.me/5541999775191?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20artigo:%20${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.dark',
                            '& svg': { transform: 'translateX(4px)' }
                          }
                        }}
                      >
                        Ler Artigo
                        <SvgIcon name="tabler-arrow-right" size={16} sx={{ transition: 'transform 0.2s ease' }} />
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ContainerWrapper>

      {/* CTA / Contact Section */}
      <CtaContact {...ctaContact} />
    </>
  );
}
