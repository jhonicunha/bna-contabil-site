import dynamic from 'next/dynamic';

const Contato = dynamic(() => import('@/views/landings/default/contato'));

export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe da BNA Contábil para tirar dúvidas, agendar reuniões com nossos contadores e peritos, ou solicitar orçamentos de planejamento tributário.'
};

export default function ContatoPage() {
  return <Contato />;
}
