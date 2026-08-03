import dynamic from 'next/dynamic';

const Contato = dynamic(() => import('@/views/landings/default/contato'));

export const metadata = {
  title: 'Contato',
  description: 'Fale com os especialistas da BNA Contábil. Entre em contato por WhatsApp, e-mail, telefone ou visite nosso escritório em Curitiba/PR para uma avaliação contábil.',
  openGraph: {
    title: 'Contato | BNA Contábil',
    description: 'Fale com os especialistas da BNA Contábil. Entre em contato por WhatsApp, e-mail, telefone ou visite nosso escritório em Curitiba/PR para uma avaliação contábil.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function ContatoPage() {
  return <Contato />;
}
