// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Perguntas Frequentes',
  caption: `Respostas para as dúvidas mais comuns sobre os serviços da ${branding.brandName}.`,
  defaultExpanded: 'Geral',
  faqList: [
    {
      question: 'A BNA Contábil também cuida de assuntos tributários e jurídicos?',
      answer: 'Não. A BNA Contábil é especializada em contabilidade, BPO contábil e departamento pessoal. Para assuntos tributários e jurídicos, contamos com a parceria da BNA Consultoria, que atua nessa frente de forma independente.',
      category: 'Geral'
    },
    {
      question: 'A BNA Contábil atende empresas de quais portes e segmentos?',
      answer: 'Atendemos pequenas e médias empresas de diversos setores, com foco em comércio, indústria e prestadores de serviços que precisam de uma contabilidade organizada e presente no dia a dia.',
      category: 'Geral'
    },
    {
      question: 'Como vocês garantem a segurança dos meus dados contábeis?',
      answer: 'Trabalhamos em total conformidade com a LGPD, com sistemas seguros para troca e armazenamento de documentos e acesso restrito às informações da sua empresa.',
      category: 'Geral'
    },
    {
      question: 'Como funciona a contratação do BPO Contábil?',
      answer: {
        content: 'Fazemos um diagnóstico da situação contábil atual da sua empresa, migramos os dados com segurança e assumimos a rotina contábil e fiscal mensal.',
        type: 'list',
        data: [
          { primary: 'Diagnóstico inicial e levantamento de documentos.' },
          { primary: 'Migração de dados e cadastro na nossa rotina.' },
          { primary: 'Acompanhamento contínuo com relatórios periódicos.' }
        ]
      },
      category: 'BPO Contábil'
    },
    {
      question: 'Quais documentos preciso enviar mensalmente?',
      answer: 'Geralmente solicitamos notas fiscais emitidas e recebidas, extratos bancários e comprovantes de despesas do mês. Nossa equipe orienta exatamente o que é necessário para o seu tipo de negócio.',
      category: 'BPO Contábil'
    },
    {
      question: 'Como funciona o Departamento Pessoal e a folha de pagamento?',
      answer: {
        content: 'Cuidamos de toda a rotina de departamento pessoal da sua empresa, desde a admissão até o desligamento de colaboradores.',
        type: 'list',
        data: [
          { primary: 'Admissão, rescisão e cálculo de férias e 13º salário.' },
          { primary: 'Folha de pagamento mensal e encargos trabalhistas.' },
          { primary: 'Envio das obrigações do eSocial dentro do prazo.' }
        ]
      },
      category: 'Departamento Pessoal'
    }
  ],
  getInTouch: {
    link: { children: 'Falar com um Consultor', href: 'https://wa.me/5541998910163', target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['Geral', 'BPO Contábil', 'Departamento Pessoal'],
  activeCategory: 'Geral'
};
