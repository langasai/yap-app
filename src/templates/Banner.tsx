import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Start your AI-powered langauge immersion experience today."
      subtitle="Get on the waitlist."
      button={
        <Link href="https://form.jotform.com/243368290804157">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
