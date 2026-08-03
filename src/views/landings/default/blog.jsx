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
    title: 'BPO Contábil: Como Terceirizar sua Contabilidade com Segurança',
    excerpt: 'Entenda como funciona o BPO contábil e por que ele pode organizar a rotina financeira da sua empresa sem aumentar sua equipe interna.',
    category: 'BPO Contábil',
    date: '18 Julho, 2026',
    readTime: '5 min de leitura',
    image: '/assets/images/blog/post1.jpg'
  },
  {
    id: 2,
    title: 'eSocial e Departamento Pessoal: Evitando Erros na Folha de Pagamento',
    excerpt: 'Saiba quais são os erros mais comuns no envio de obrigações do eSocial e como uma rotina bem estruturada evita multas trabalhistas.',
    category: 'Departamento Pessoal',
    date: '15 Julho, 2026',
    readTime: '6 min de leitura',
    image: '/assets/images/blog/post2.jpg'
  },
  {
    id: 3,
    title: 'Como a Contabilidade Consultiva Ajuda na Tomada de Decisão',
    excerpt: 'Relatórios gerenciais bem construídos transformam números em decisões. Veja como usar a contabilidade a favor do crescimento do negócio.',
    category: 'Contabilidade Consultiva',
    date: '10 Julho, 2026',
    readTime: '4 min de leitura',
    image: '/assets/images/blog/post3.jpg'
  },
  {
    id: 4,
    title: 'Abertura de Empresa: Passo a Passo para Formalizar seu Negócio',
    excerpt: 'Do registro societário ao alvará de funcionamento: entenda cada etapa necessária para abrir uma empresa com segurança.',
    category: 'Abertura de Empresas',
    date: '05 Julho, 2026',
    readTime: '7 min de leitura',
    image: '/assets/images/blog/post4.jpg'
  },
  {
    id: 5,
    title: 'Escrituração Contábil: Por que Manter os Livros Sempre em Dia',
    excerpt: 'A escrituração contábil em dia evita problemas com auditorias, financiamentos e certidões. Entenda a importância dessa rotina.',
    category: 'BPO Contábil',
    date: '28 Junho, 2026',
    readTime: '5 min de leitura',
    image: '/assets/images/blog/post5.jpg'
  },
  {
    id: 6,
    title: 'Mudanças na Legislação Contábil: O que Muda em 2027',
    excerpt: 'O cronograma de mudanças contábeis e fiscais está avançando. Prepare sua empresa para as principais novidades do próximo ano.',
    category: 'Legislação Contábil',
    date: '20 Junho, 2026',
    readTime: '8 min de leitura',
    image: '/assets/images/blog/post6.jpg'
  }
];

const categories = ['Todos', 'BPO Contábil', 'Departamento Pessoal', 'Contabilidade Consultiva', 'Abertura de Empresas', 'Legislação Contábil'];

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
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
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
                        href="#"
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
