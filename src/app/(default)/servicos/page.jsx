import dynamic from 'next/dynamic';

const Servicos = dynamic(() => import('@/views/landings/default/servicos'));

export const metadata = {
  title: 'Serviços',
  description: 'Descubra nossos serviços de contabilidade consultiva, planejamento tributário estratégico, recuperação de créditos fiscais e assessoria de alta performance.',
  openGraph: {
    title: 'Serviços | BNA Contábil',
    description: 'Descubra nossos serviços de contabilidade consultiva, planejamento tributário estratégico, recuperação de créditos fiscais e assessoria de alta performance.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function ServicosPage() {
  return <Servicos />;
}
