// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

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

export const feature20 = {
  heading: 'Como Podemos te Ajudar?',
  features: [
    {
      icon: 'tabler-file-analytics',
      title: 'Revisão Fiscal',
      content: 'Análise minuciosa de dados fiscais dos últimos 5 anos para detectar impostos pagos indevidamente.'
    },
    {
      icon: 'tabler-adjustments',
      title: 'Planejamento Tributário',
      content: 'Estudo societário e operacional para definir a alternativa legal mais econômica (Lucro Real, Presumido ou Simples).'
    },
    {
      icon: 'tabler-businessplan',
      title: 'Contabilidade Consultiva',
      content: 'Otimização de rotinas fiscais e contábeis com foco na geração de relatórios estratégicos de apoio a decisões.'
    },
    {
      icon: 'tabler-cash-banknote',
      title: 'Recuperação de Créditos',
      content: 'Identificação e levantamento de créditos de PIS, COFINS, ICMS e IPI por vias administrativas seguras.'
    },
    {
      icon: 'tabler-device-analytics',
      title: 'BPO Financeiro',
      content: 'Terceirização da gestão financeira com precisão contábil e total conformidade legal no dia a dia.'
    },
    {
      icon: 'tabler-hierarchy',
      title: 'Planejamento Societário',
      content: 'Reestruturações societárias, fusões, cisões e constituição de holdings para proteção de patrimônio.'
    }
  ]
};

export const feature21 = {
  heading: `Por que escolher a ${branding.brandName}?`,
  caption: 'Unimos o rigor da advocacia tributária e a inteligência analítica contábil sob uma única estrutura corporativa sinérgica.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Falar no WhatsApp', href: 'https://wa.me/5541999775191', ...linkProps },
  secondaryBtn: {
    children: 'Sobre Nós',
    href: '/quem-somos'
  },
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

export const feature18 = {
  heading: 'Especialidades de Alta Performance',
  caption: 'Conectamos inteligência de dados a soluções práticas e seguras para alavancar a rentabilidade do seu negócio.',
  topics: [
    {
      icon: 'tabler-cash-banknote',
      title: 'Recuperação de Créditos',
      title2: 'Recupere o Fluxo de Caixa Perdido',
      description: 'Nossa auditoria digital mapeia inconsistências e créditos acumulados de impostos (PIS/COFINS, ICMS e IPI) prontos para compensação administrativa imediata.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: [
        { primary: 'Auditoria eletrônica automatizada dos últimos 60 meses' },
        { primary: 'Créditos monofásicos e exclusão do ICMS na base de cálculo' },
        { primary: 'Processo 100% administrativo, rápido e seguro' },
        { primary: 'Estrita conformidade com as regras da Receita Federal' }
      ],
      actionBtn: { children: 'Falar com Especialista', href: 'https://wa.me/5541999775191', ...linkProps }
    },
    {
      icon: 'tabler-file-analytics',
      title: 'Planejamento Fiscal',
      title2: 'Redução Legal da Carga Tributária',
      description: 'Modelamos cenários operacionais complexos para estruturar a alternativa legal de menor imposto possível para sua empresa.',
      image: '/assets/images/graphics/default/admin-dashboard-2.png',
      list: [
        { primary: 'Transição estratégica entre regimes (Lucro Real vs. Presumido)' },
        { primary: 'Aproveitamento de incentivos e benefícios fiscais estaduais' },
        { primary: 'Planejamento tributário logístico e de e-commerce' },
        { primary: 'Prevenção contra contingências e multas fiscais' }
      ],
      actionBtn: { children: 'Avaliar Regime Tributário', href: 'https://wa.me/5541999775191', ...linkProps }
    },
    {
      icon: 'tabler-shield',
      title: 'Gestão de Passivos e Defesas',
      title2: 'Segurança Jurídica e Defesas Técnicas',
      description: 'Aproveitamos a ampla bagagem jurídica da BNA para redigir defesas administrativas robustas e atuar na blindagem e prevenção de riscos dos sócios.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      list: [
        { primary: 'Elaboração de impugnações e defesas fiscais de alto nível' },
        { primary: 'Acompanhamento de fiscalizações municipais, estaduais e federais' },
        { primary: 'Consultoria preventiva e blindagem patrimonial de sócios' },
        { primary: 'Estruturação de parcelamentos especiais e CND' }
      ],
      actionBtn: { children: 'Proteger Minha Empresa', href: 'https://wa.me/5541999775191', ...linkProps }
    }
  ]
};
