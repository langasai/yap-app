import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
           AI-Powered Language Immersion
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            Language <span className="text-primary-700">learning</span> that {'\n'}
            <span className="text-primary-700">speaks</span> to you and {'\n'}
            <span className="text-primary-700">listens</span> to you grow
          </>
        }
        description="Learn any language by changing your inner monologue."
        button={
          <Link href="https://form.jotform.com/243368290804157">
            <Button xl>Join the waitlist</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
