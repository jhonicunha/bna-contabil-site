'use client';

// @project
import { Error404Page } from '@/blocks/maintenance';
import ThemeProviders from '@/components/ThemeProvider';

/***************************  ERROR 404 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Voltar para o Início', href: '/' },
  heading: 'Ops! Parece que você tentou acessar uma página que não existe ou foi movida.'
};

/***************************  ERROR - 404  ***************************/

export default function notfound() {
  return (
    <ThemeProviders>
      <Error404Page {...data} />
    </ThemeProviders>
  );
}
