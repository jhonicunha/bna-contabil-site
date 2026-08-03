import dynamic from 'next/dynamic';

const QuemSomos = dynamic(() => import('@/views/landings/default/quem-somos'));

export const metadata = {
  title: 'Quem Somos',
  description: 'Conheça a BNA Contábil: contabilidade consultiva e BPO contábil liderados pelo contador Paulo Cunha, com tecnologia e atendimento próximo para a gestão contábil da sua empresa.',
  openGraph: {
    title: 'Quem Somos | BNA Contábil',
    description: 'Conheça a BNA Contábil: contabilidade consultiva e BPO contábil liderados pelo contador Paulo Cunha, com tecnologia e atendimento próximo para a gestão contábil da sua empresa.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function QuemSomosPage() {
  return <QuemSomos />;
}
