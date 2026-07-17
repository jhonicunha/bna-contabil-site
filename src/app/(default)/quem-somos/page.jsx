import dynamic from 'next/dynamic';

const QuemSomos = dynamic(() => import('@/views/landings/default/quem-somos'));

export const metadata = {
  title: 'Quem Somos',
  description: 'Conheça a história da BNA Contábil, nossa missão, visão, valores e os sócios por trás da nossa inteligência tributária e contabilidade estratégica.'
};

export default function QuemSomosPage() {
  return <QuemSomos />;
}
