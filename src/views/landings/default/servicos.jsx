'use client';

// @project
import { Feature20, Feature18 } from '@/blocks/feature';
import { Cta5 } from '@/blocks/cta';
import SectionHero from '@/components/SectionHero';

// @data
import { feature20, feature18, cta5 } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Serviços' }
];

export default function Servicos() {
  return (
    <>
      <SectionHero heading="Nossos Serviços" breadcrumbs={breadcrumbs} search={false} />
      
      {/* Overview Services Grid */}
      <Feature20 {...feature20} />
      
      {/* Detailed Specialties Tabs */}
      <Feature18 {...feature18} />
      
      {/* Call to Action */}
      <Cta5 {...cta5} />
    </>
  );
}
