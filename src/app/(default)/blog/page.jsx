import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/views/landings/default/blog'));

export const metadata = {
  title: 'Blog',
  description: 'Acompanhe artigos e dicas sobre BPO contábil, departamento pessoal, contabilidade consultiva e abertura de empresas.',
  openGraph: {
    title: 'Blog | BNA Contábil',
    description: 'Acompanhe artigos e dicas sobre BPO contábil, departamento pessoal, contabilidade consultiva e abertura de empresas.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function BlogPage() {
  return <Blog />;
}
