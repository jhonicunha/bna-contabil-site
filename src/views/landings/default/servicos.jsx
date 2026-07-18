'use client';

// @project
import { FeatureServices, FeatureWhyUs } from '@/blocks/feature';
import { CtaContact } from '@/blocks/cta';
import SectionHero from '@/components/SectionHero';

// @data
import { featureServices, featureWhyUs, ctaContact } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Serviços' }
];

export default function Servicos() {
  return (
    <>
      <SectionHero heading="Nossos Serviços" breadcrumbs={breadcrumbs} search={false} />
      
      {/* Overview Services Grid */}
      <FeatureServices {...featureServices} />
      
      {/* Detailed Specialties Tabs */}
      <FeatureWhyUs {...featureWhyUs} />
      
      {/* Call to Action */}
      <CtaContact {...ctaContact} />
    </>
  );
}
