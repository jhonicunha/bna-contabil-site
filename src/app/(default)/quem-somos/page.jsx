import dynamic from 'next/dynamic';

const QuemSomos = dynamic(() => import('@/views/landings/default/quem-somos'));

export const metadata = {
  title: 'Quem Somos',
  description: 'Conheça a BNA Contábil: a união estratégica da bagagem jurídica da BNA Consultoria com a perícia técnica contábil e auditoria liderada pelo sócio Paulo Cunha.',
  openGraph: {
    title: 'Quem Somos | BNA Contábil',
    description: 'Conheça a BNA Contábil: a união estratégica da bagagem jurídica da BNA Consultoria com a perícia técnica contábil e auditoria liderada pelo sócio Paulo Cunha.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function QuemSomosPage() {
  return <QuemSomos />;
}
