'use client';

// @project
import { Error500Page } from '@/blocks/maintenance';
import ThemeProviders from '@/components/ThemeProvider';

/***************************  ERROR 500 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Voltar para o Início', href: '/' },
  heading: 'Ocorreu um erro inesperado no servidor. Por favor, tente novamente mais tarde ou entre em contato com nosso suporte.'
};

/***************************  ERROR - 500  ***************************/

export default function InternalServerError() {
  return (
    <ThemeProviders>
      <Error500Page {...data} />
    </ThemeProviders>
  );
}
