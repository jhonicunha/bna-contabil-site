'use client';

// @project
import { ContactUs4 } from '@/blocks/contact-us';
import { CtaContact } from '@/blocks/cta';
import SectionHero from '@/components/SectionHero';

// @data
import { contactUS, ctaContact } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Contato' }
];

export default function Contato() {
  return (
    <>
      <SectionHero heading="Entre em Contato" breadcrumbs={breadcrumbs} search={false} />
      <ContactUs4 {...contactUS} />
      <CtaContact {...ctaContact} />
    </>
  );
}
