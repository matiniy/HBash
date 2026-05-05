import type { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';

export const metadata: Metadata = {
  title: 'New Construction Homes Dallas TX | Haideh Bashash',
  description:
    'Explore new construction homes in Dallas TX with local guidance on builders, communities, pricing, and the buying process.',
  keywords: [
    'new construction homes Dallas TX',
    'Dallas new home communities',
    'Dallas home builders',
    'Dallas new homes for sale',
    'new house developments Dallas',
  ],
};

export default function DallasNewConstructionHomesPage() {
  return (
    <SEOLandingPage
      h1="New Construction Homes in Dallas TX"
      intro="Find the right Dallas new-construction community with neighborhood insight, builder comparisons, and negotiation support from first tour to final walkthrough."
      keyword="new construction homes Dallas TX"
      areas={['Frisco', 'Plano', 'McKinney', 'Prosper', 'Celina', 'North Dallas']}
      highlights={[
        'Compare builder incentives, timelines, and lot premiums.',
        'Understand upgrades vs. base price before signing.',
        'Review resale potential and school-zone considerations.',
        'Get support during inspection, walk-through, and closing.',
      ]}
      steps={[
        'Define your budget, timeline, and must-have features before visiting model homes.',
        'Shortlist Dallas communities based on commute, schools, amenities, and long-term growth.',
        'Compare builder contracts, incentives, and upgrade packages line by line.',
        'Complete inspections and final walk-through with clear punch-list support.',
      ]}
      faqs={[
        {
          question: 'Are builder incentives better than rate buydowns?',
          answer:
            'It depends on your financing and hold period. Many buyers benefit more from long-term payment savings than one-time design credits.',
        },
        {
          question: 'Should I still do an inspection on a new build?',
          answer:
            'Yes. Independent inspections help catch issues early and protect your investment before closing.',
        },
        {
          question: 'Which Dallas suburbs have the most new construction options?',
          answer:
            'Frisco, McKinney, Prosper, Celina, and nearby growth corridors typically have the largest supply of new communities.',
        },
      ]}
    />
  );
}
