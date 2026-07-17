// @project
import SvgIcon from '@/components/SvgIcon';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const navbar = {
  customization: false,
  secondaryBtn: {
    children: <SvgIcon name="tabler-user" size={18} />,
    href: '/auth/login',
    sx: { 
      minWidth: 40, 
      width: 40,
      height: 40, 
      p: 0,
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
    { id: 'quem-somos', title: 'Quem Somos', link: '/quem-somos' },
    { id: 'servicos', title: 'Serviços', link: '/servicos' },
    { id: 'contato', title: 'Contato', link: '/contato' }
  ]
};
