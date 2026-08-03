// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';

export const feature2 = {
  heading: 'Cultura de Inovação',
  caption: 'Junte-se a uma equipe que adota ideias inovadoras e cultiva um ambiente onde sua criatividade pode prosperar.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Trabalho em Equipe',
      content: 'Adotamos perspectivas diversas, criando um ambiente inclusivo.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusão',
      content: 'Valorizamos a pluralidade de ideias e experiências em cada projeto.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Crescimento',
      content: 'Nossa cultura prioriza o aprendizado contínuo e o desenvolvimento pessoal.'
    }
  ]
};

export const feature5 = {
  heading: 'Além do Convencional',
  caption: 'Nossos benefícios vão além do padrão, garantindo equilíbrio entre vida pessoal e profissional.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Remuneração',
      content: 'Salários competitivos que reconhecem suas habilidades e conquistas.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Saúde',
      content: 'Plano de saúde abrangente para você e sua família.'
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Flexibilidade',
      content: 'Horários flexíveis e opções de trabalho híbrido ou remoto.'
    },
    {
      icon: 'tabler-users',
      title: 'Suporte Familiar',
      content: 'Políticas focadas em apoiar momentos importantes da sua família.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: 'Mais de 10 mil avaliações positivas'
  },
  content: 'Explore diversos planos de carreira interna através de nossos programas de mobilidade.',
  actionBtn: { children: 'Ver Vagas Disponíveis', href: '#' }
};

export const featureServices = {
  heading: 'Como Podemos te Ajudar?',
  features: [
    {
      icon: 'tabler-device-analytics',
      title: 'BPO Contábil',
      content: 'Terceirização da gestão contábil e financeira, com precisão técnica e total conformidade no dia a dia.'
    },
    {
      icon: 'tabler-businessplan',
      title: 'Contabilidade Consultiva',
      content: 'Relatórios gerenciais e indicadores estratégicos para apoiar a tomada de decisão do seu negócio.'
    },
    {
      icon: 'tabler-users',
      title: 'Departamento Pessoal',
      content: 'Admissão, rescisão, cálculo de folha de pagamento, férias, 13º e obrigações trabalhistas em dia.'
    },
    {
      icon: 'tabler-building-store',
      title: 'Abertura de Empresas',
      content: 'Constituição societária, alvarás e registro para você formalizar ou expandir seu negócio com segurança.'
    },
    {
      icon: 'tabler-file-analytics',
      title: 'Escrituração Contábil e Fiscal',
      content: 'Apuração e envio de escriturações contábeis e fiscais dentro dos prazos legais (SPED, ECD, ECF).'
    },
    {
      icon: 'tabler-receipt-2',
      title: 'Obrigações Fiscais Mensais',
      content: 'Cálculo e emissão das guias mensais (DAS, DARF, GPS) com total conformidade e pontualidade.'
    }
  ]
};

export const featureStats = {
  heading: `Por que escolher a ${branding.brandName}?`,
  caption: 'Unimos o rigor da advocacia tributária e a inteligência analítica contábil sob uma única estrutura corporativa sinérgica.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-users',
      title: 'Equipe Multidisciplinar'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-coin',
      title: 'Foco em Resultados'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-shield',
      title: 'Segurança Jurídica'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-award',
      title: 'Experiência Consolidada'
    }
  ]
};

export const feature = {
  heading: `O que está incluso na ${branding.brandName}`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'Compliance Fiscal',
      content: 'Garantia de entrega das obrigações acessórias com rigor técnico.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Tecnologia Aplicada',
      content: 'Uso de softwares líderes de mercado para conferência digital de arquivos XML e SPED.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Consultoria Mensal',
      content: 'Reuniões mensais de alinhamento financeiro e tributário com especialistas.'
    }
  ]
};

export const feature7 = {
  heading: 'Desempenho em Tempo Real',
  caption: 'Obtenha vantagem competitiva com monitoramento fiscal dinâmico.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Valor Central',
          content: 'Estratégias proativas baseadas em dados em tempo real.'
        }
      ]
    }
  ]
};

export const feature23 = {
  heading: 'Cultura de Inovação',
  caption: 'Junte-se à nossa equipe.',
  heading2: 'Crescimento',
  caption2: 'Priorizamos o desenvolvimento pessoal.',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Venha Conosco', href: '#' },
  features: [
    {
      icon: 'tabler-users',
      title: 'Equipe',
      content: 'Ambiente inclusivo e cooperativo.'
    }
  ]
};

export const featureWhyUs = {
  heading: 'Nossas Especialidades',
  caption: 'Conectamos tecnologia e precisão técnica para manter a contabilidade da sua empresa sempre organizada.',
  topics: [
    {
      icon: 'tabler-device-analytics',
      title: 'BPO Contábil',
      title2: 'Sua Gestão Contábil em Mãos Especializadas',
      description: 'Terceirizamos a operação contábil e financeira do dia a dia da sua empresa com precisão técnica e total conformidade, liberando a gestão para focar no core business.',
      image: '/assets/images/blog/post6.jpg',
      list: [
        { primary: 'Contas a pagar e a receber com conciliação bancária diária' },
        { primary: 'Emissão e controle de notas fiscais e boletos' },
        { primary: 'Fluxo de caixa consolidado e projeções financeiras' },
        { primary: 'Conformidade fiscal e contábil no dia a dia' }
      ]
    },
    {
      icon: 'tabler-businessplan',
      title: 'Contabilidade Consultiva',
      title2: 'Contabilidade que Vira Decisão Estratégica',
      description: 'Vamos além da escrituração obrigatória: transformamos os dados contábeis da sua empresa em relatórios gerenciais e indicadores que apoiam decisões de crescimento, investimento e precificação.',
      image: '/assets/images/blog/post3.jpg',
      list: [
        { primary: 'Relatórios gerenciais mensais com indicadores de performance (DRE gerencial, fluxo de caixa)' },
        { primary: 'Reuniões periódicas de alinhamento com sócios e diretoria financeira' },
        { primary: 'Otimização de rotinas contábeis com uso de tecnologia' },
        { primary: 'Suporte direto na tomada de decisão para expansão e novos investimentos' }
      ]
    },
    {
      icon: 'tabler-users',
      title: 'Departamento Pessoal',
      title2: 'Sua Folha de Pagamento Sempre em Dia',
      description: 'Cuidamos de toda a rotina de departamento pessoal da sua empresa, da admissão ao desligamento, com precisão e dentro dos prazos legais.',
      image: '/assets/images/blog/post2.jpg',
      list: [
        { primary: 'Admissão, rescisão e cálculo de férias e 13º salário' },
        { primary: 'Folha de pagamento mensal e encargos trabalhistas' },
        { primary: 'Envio das obrigações do eSocial dentro do prazo' },
        { primary: 'Suporte direto para dúvidas de RH e colaboradores' }
      ]
    },
    {
      icon: 'tabler-building-store',
      title: 'Abertura de Empresas',
      title2: 'Formalize seu Negócio com Segurança',
      description: 'Cuidamos de toda a burocracia para abrir, alterar ou legalizar sua empresa, para você começar a operar rapidamente e sem dor de cabeça.',
      image: '/assets/images/blog/post1.jpg',
      list: [
        { primary: 'Constituição societária e registro nos órgãos competentes' },
        { primary: 'Emissão de alvarás e licenças necessárias' },
        { primary: 'Regularização completa perante prefeitura, estado e União' },
        { primary: 'Alterações contratuais e atualizações societárias' }
      ]
    },
    {
      icon: 'tabler-file-analytics',
      title: 'Escrituração Contábil e Fiscal',
      title2: 'Livros e Escriturações Sempre em Ordem',
      description: 'Mantemos a escrituração contábil e fiscal da sua empresa em dia, com envio pontual das obrigações acessórias exigidas por lei.',
      image: '/assets/images/blog/post5.jpg',
      list: [
        { primary: 'Escrituração Contábil Digital (ECD) e Fiscal (ECF)' },
        { primary: 'Envio de SPED Fiscal e Contribuições dentro do prazo' },
        { primary: 'Balanços e demonstrações contábeis atualizados' },
        { primary: 'Organização documental para auditorias e certidões' }
      ]
    },
    {
      icon: 'tabler-receipt-2',
      title: 'Obrigações Fiscais Mensais',
      title2: 'Guias e Impostos Calculados com Precisão',
      description: 'Calculamos e emitimos as guias mensais da sua empresa dentro do prazo, evitando multas e juros por atraso.',
      image: '/assets/images/blog/post4.jpg',
      list: [
        { primary: 'Apuração mensal de DAS, DARF e GPS' },
        { primary: 'Conferência de dados antes do envio para evitar erros' },
        { primary: 'Prazos e vencimentos organizados para cada obrigação' },
        { primary: 'Suporte para dúvidas sobre guias e vencimentos' }
      ]
    }
  ]
};
