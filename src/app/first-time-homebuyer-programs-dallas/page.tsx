import type { Metadata } from 'next';
import SEOLandingPage from '@/components/SEOLandingPage';

export const metadata: Metadata = {
  title: 'First-Time Homebuyer Programs Dallas | 2026 Guide',
  description:
    'Understand first-time homebuyer programs in Dallas, including down payment assistance options, FHA paths, and grant eligibility basics.',
  keywords: [
    'first-time homebuyer programs Dallas',
    'Dallas down payment assistance first-time',
    'Dallas FHA loans first-time homebuyer',
    'Dallas DHAP down payment',
    'homebuyer grant Dallas TX',
    'zero down loan Dallas',
    'Dallas home loan assistance',
  ],
};

export default function FirstTimeProgramsDallasPage() {
  return (
    <SEOLandingPage
      h1="First-Time Homebuyer Programs in Dallas"
      intro="Get practical guidance on Dallas first-time buyer programs, down payment assistance pathways, and financing options so you can prepare with confidence."
      keyword="first-time homebuyer programs Dallas"
      areas={['Dallas city programs', 'Plano', 'Irving', 'Garland', 'Richardson', 'Collin County']}
      highlights={[
        'Compare loan types including conventional, FHA, and eligible assistance options.',
        'Understand credit score, debt, and income factors for approval.',
        'Plan for grants, assistance limits, and repayment rules where applicable.',
        'Create an action plan for timing, documents, and lender coordination.',
      ]}
      steps={[
        'Review your credit, savings, and monthly budget before house hunting.',
        'Match your profile to available first-time buyer and assistance programs.',
        'Get pre-approved with a lender who understands local Dallas programs.',
        'Submit offers with financing terms that balance affordability and competitiveness.',
      ]}
      faqs={[
        {
          question: 'Is down payment assistance available in Dallas?',
          answer:
            'Yes, depending on eligibility factors like income, occupancy, and program rules. Availability can change, so current lender guidance matters.',
        },
        {
          question: 'Can first-time buyers use FHA loans in Dallas?',
          answer:
            'Many first-time buyers use FHA loans because of flexible qualifying criteria and lower down-payment options.',
        },
        {
          question: 'What documents should I prepare first?',
          answer:
            'Start with income proof, tax returns, bank statements, and identification so pre-approval and underwriting can move faster.',
        },
      ]}
    />
  );
}
