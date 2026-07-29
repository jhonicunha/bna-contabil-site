// @project
import branding from '@/branding.json';

export const contactUS = {
  heading: 'Canais de Atendimento',
  caption: 'Escolha a forma mais rápida de falar conosco ou envie uma mensagem no formulário abaixo.',
  list: [
    {
      icon: 'tabler-brand-whatsapp',
      title: 'Falar no WhatsApp',
      content: 'Fale com nossa equipe comercial para tirar dúvidas rápidas e solicitar propostas.',
      link: { 
        children: 'Iniciar Conversa', 
        href: 'https://wa.me/5541998910163', 
        target: '_blank', 
        rel: 'noopener noreferrer' 
      }
    },
    {
      icon: 'tabler-mail',
      title: 'E-mail Corporativo',
      content: 'Entre em contato para assuntos institucionais, parcerias ou envio de propostas.',
      link: { 
        children: 'Enviar E-mail', 
        href: 'mailto:contato@bnaconsultoria.com.br' 
      }
    },
    {
      icon: 'tabler-map-pin',
      title: 'Nosso Escritório',
      content: 'Av. Visconde de Guarapuava, 4628 Sala 709 - Batel, Curitiba/PR',
      link: { 
        children: 'Como Chegar', 
        href: 'https://maps.google.com/maps?q=Av.+Visconde+de+Guarapuava%2C+4628+-+Batel%2C+Curitiba+-+PR', 
        target: '_blank', 
        rel: 'noopener noreferrer' 
      }
    }
  ]
};
