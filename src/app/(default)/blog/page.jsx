import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/views/landings/default/blog'));

export const metadata = {
  title: 'Blog',
  description: 'Acompanhe as últimas novidades, artigos e dicas sobre inteligência fiscal, holding familiar, reforma tributária e planejamento tributário estratégico.',
  openGraph: {
    title: 'Blog | BNA Contábil',
    description: 'Acompanhe as últimas novidades, artigos e dicas sobre inteligência fiscal, holding familiar, reforma tributária e planejamento tributário estratégico.',
    images: '/assets/images/metadata/og.jpg'
  }
};

export default function BlogPage() {
  return <Blog />;
}
