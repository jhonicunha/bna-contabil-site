'use client';

// @project
import { ContactUs4 } from '@/blocks/contact-us';
import { Cta5 } from '@/blocks/cta';
import SectionHero from '@/components/SectionHero';

// @data
import { contactUS, cta5 } from './data';

const breadcrumbs = [
  { title: 'Início', to: '/' },
  { title: 'Contato' }
];

export default function Contato() {
  return (
    <>
      <SectionHero heading="Entre em Contato" breadcrumbs={breadcrumbs} search={false} />
      <ContactUs4 {...contactUS} />
      <Cta5 {...cta5} />
    </>
  );
}
