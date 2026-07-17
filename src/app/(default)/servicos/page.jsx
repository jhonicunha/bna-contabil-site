import dynamic from 'next/dynamic';

const Servicos = dynamic(() => import('@/views/landings/default/servicos'));

export const metadata = {
  title: 'Serviços',
  description: 'Descubra nossos serviços de contabilidade consultiva, planejamento tributário, recuperação de créditos, BPO financeiro e assessoria fiscal para a sua empresa.'
};

export default function ServicosPage() {
  return <Servicos />;
}
