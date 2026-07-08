// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const navbar = {
  customization: false,
  secondaryBtn: {
    children: 'Área do Cliente',
    href: '/sections/auth/login',
    startIcon: <SvgIcon name="tabler-user" size={16} />,
    sx: { 
      minWidth: 140, 
      height: 40, 
      px: 2.2,
      border: '1px solid',
      borderColor: 'grey.300',
      borderRadius: 2,
      textTransform: 'none',
      fontWeight: 500,
      color: 'text.secondary',
      '&:hover': {
        bgcolor: 'grey.100',
        borderColor: 'grey.400'
      }
    }
  },
  primaryBtn: { 
    children: 'Falar no WhatsApp', 
    href: 'https://wa.me/5541999775191', 
    ...linkProps,
    sx: {
      borderRadius: 2,
      textTransform: 'none',
      fontWeight: 600,
      bgcolor: '#25D366', // WhatsApp green
      color: '#fff',
      '&:hover': {
        bgcolor: '#128C7E'
      }
    }
  },
  navItems: [
    { id: 'inicio', title: 'Início', link: '/' },
    { id: 'servicos', title: 'Serviços', link: '#servicos' },
    { id: 'socios', title: 'Sócios', link: '#socios' },
    { id: 'faq', title: 'Perguntas Frequentes', link: '#faq' },
    { id: 'contato', title: 'Contato', link: '#contato' }
  ]
};
