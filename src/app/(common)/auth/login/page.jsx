import dynamic from 'next/dynamic';

const LoginView = dynamic(() => import('@/views/auth/login'));

export const metadata = {
  title: 'Área do Cliente',
  description: 'Faça login na Área do Cliente da BNA Contábil para acessar suas guias de impostos, relatórios contábeis e enviar documentos.'
};

export default function LoginPage() {
  return <LoginView />;
}
