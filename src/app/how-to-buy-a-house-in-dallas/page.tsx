import type { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';

export const metadata: Metadata = {
  title: 'How to Buy a House in Dallas | Homebuyer Guide',
  description:
    'Learn how to buy a house in Dallas step by step, from pre-approval to closing, with local strategy for first-time and move-up buyers.',
  keywords: [
    'how to buy a house in Dallas',
    'Dallas homebuying process',
    'homebuying steps Dallas TX',
    'first home Dallas tips',
    'buy house Dallas Texas guide',
  ],
};

export default function HowToBuyHouseDallasPage() {
  return (
    <SEOLandingPage
      h1="How to Buy a House in Dallas"
      intro="Follow a clear Dallas homebuying roadmap with local market guidance, negotiation support, and practical steps that help you buy with confidence."
      keyword="how to buy a house in Dallas"
      areas={['Dallas', 'Plano', 'Frisco', 'Irving', 'McKinney', 'Richardson']}
      highlights={[
        'Build a smart budget that includes taxes, insurance, and closing costs.',
        'Choose neighborhoods that fit commute, schools, and lifestyle goals.',
        'Write competitive offers without overpaying in active market segments.',
        'Stay protected through contract deadlines, inspections, and appraisal.',
      ]}
      steps={[
        'Get pre-approved and set a monthly payment target you can sustain.',
        'Tour homes in target Dallas neighborhoods and rank your priorities.',
        'Submit an offer strategy aligned to comps and seller conditions.',
        'Complete option period, appraisal, loan approval, and closing.',
      ]}
      faqs={[
        {
          question: 'How much down payment do I need in Dallas?',
          answer:
            'It varies by loan program. Many buyers use low-down-payment options, but total cash needed includes earnest money and closing costs too.',
        },
        {
          question: 'How long does the buying process usually take?',
          answer:
            'Most financed purchases close in about 30 to 45 days after contract, depending on lender speed and appraisal timing.',
        },
        {
          question: 'Can I buy and still keep my current lease for a while?',
          answer:
            'Yes. With proper planning on close date and move timeline, many buyers transition smoothly from lease to ownership.',
        },
      ]}
    />
  );
}
