// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Perguntas Frequentes',
  caption: `Respostas para as dúvidas mais comuns sobre os serviços da ${branding.brandName}.`,
  defaultExpanded: 'Geral',
  faqList: [
    {
      question: 'Qual a diferença entre a advocacia tributária (BNA Consultoria) e a BNA Contábil?',
      answer: 'A advocacia tributária (BNA Consultoria) atua na esfera jurídica, defesas e reestruturação de passivos judiciais. A contabilidade tributária (BNA Contábil) foca no compliance fiscal diário, apuração de tributos, entrega de obrigações acessórias e identificação de créditos administrativos, oferecendo uma solução completa e sinérgica.',
      category: 'Geral'
    },
    {
      question: 'A BNA Contábil atende empresas de quais portes e segmentos?',
      answer: 'Atendemos desde médias empresas a grandes corporações de diversos setores, com especial foco em comércio, indústria, prestadores de serviços complexos e holdings patrimoniais/familiares.',
      category: 'Geral'
    },
    {
      question: 'Como funciona o processo de Recuperação de Créditos Tributários?',
      answer: {
        content: 'Nossa equipe realiza um diagnóstico digital completo dos últimos 5 anos de escrituração fiscal da sua empresa. Identificamos valores recolhidos a maior ou indevidamente de forma administrativa e realizamos os procedimentos de retificação e compensação de forma rápida e segura.',
        type: 'list',
        data: [
          { primary: 'Diagnóstico digital e auditoria eletrônica gratuita.' },
          { primary: 'Protocolo de retificação e compensação 100% administrativo.' },
          { primary: 'Acompanhamento pós-compensação para total segurança.' }
        ]
      },
      category: 'Créditos Fiscais'
    },
    {
      question: 'Quais tributos podem ser recuperados administrativamente?',
      answer: 'Os principais tributos passíveis de recuperação administrativa incluem PIS e COFINS (especialmente monofásicos e exclusão do ICMS de suas bases de cálculo), ICMS (créditos acumulados e substituição tributária), IPI e encargos previdenciários (INSS sobre verbas indenizatórias).',
      category: 'Créditos Fiscais'
    },
    {
      question: 'O que é o Planejamento Tributário Estratégico?',
      answer: {
        content: 'É um estudo detalhado da operação e estrutura da empresa para identificar formas legais de reduzir a carga de impostos pagos. Avaliamos a melhor opção de enquadramento anual.',
        type: 'list',
        data: [
          { primary: 'Simulação comparativa entre Lucro Real, Presumido e Simples Nacional.' },
          { primary: 'Estudo de incentivos fiscais estaduais (como no Paraná).' },
          { primary: 'Reorganização societária e operacional para eficiência tributária.' }
        ]
      },
      category: 'Serviços Fiscais'
    },
    {
      question: 'Como a BNA garante a segurança das compensações fiscais?',
      answer: 'Todas as nossas análises são fundamentadas na legislação vigente, instruções normativas da Receita Federal e decisões consolidadas dos tribunais superiores (STF e STJ). Não realizamos procedimentos de risco ou sem lastro documental sólido.',
      category: 'Serviços Fiscais'
    }
  ],
  getInTouch: {
    link: { children: 'Falar com um Consultor', href: 'https://wa.me/5541999775191', target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['Geral', 'Serviços Fiscais', 'Créditos Fiscais'],
  activeCategory: 'Geral'
};
