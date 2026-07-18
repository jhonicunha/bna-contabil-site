'use client';

// @project
import { AboutSummary } from '@/blocks/about';
import { FeatureServices } from '@/blocks/feature';
import { Hero } from '@/blocks/hero';
import LazySection from '@/components/LazySection';

// @data
import {
  aboutSummary,
  metrics,
  clientele,
  ctaBanner,
  ctaContact,
  ctaSimple,
  faq,
  featureServices,
  featureWhyUs,
  hero,
  testimonial
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {

  return (
    <>
      <Hero {...hero} />
      <FeatureServices {...featureServices} />
      <AboutSummary {...aboutSummary} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.FeatureWhyUs })), props: featureWhyUs }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/metrics').then((module) => ({ default: module.Metrics })), props: metrics },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.CtaBanner })), props: ctaBanner }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial })), props: testimonial },
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele })), props: clientele }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.CtaContact })), props: ctaContact },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq })), props: faq },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.CtaSimple })), props: ctaSimple }
        ]}
        offset="200px"
      />
    </>
  );
}
