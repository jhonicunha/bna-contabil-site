import dynamic from 'next/dynamic';

const Servicos = dynamic(() => import('@/views/landings/default/servicos'));

export const metadata = {
  title: 'Serviços',
  description: 'Descubra nossos serviços de contabilidade consultiva, BPO contábil, departamento pessoal e abertura de empresas para simplificar a gestão do seu negócio.',
  openGraph: {
    title: 'Serviços | BNA Contábil',
    description: 'Descubra nossos serviços de contabilidade consultiva, BPO contábil, departamento pessoal e abertura de empresas para simplificar a gestão do seu negócio.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function ServicosPage() {
  return <Servicos />;
}
