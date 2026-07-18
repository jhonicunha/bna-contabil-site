import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/views/landings/default/blog'));

export const metadata = {
  title: 'Blog',
  description: 'Acompanhe as últimas novidades, análises e artigos sobre inteligência fiscal, contabilidade estratégica e planejamento tributário.'
};

export default function BlogPage() {
  return <Blog />;
}
