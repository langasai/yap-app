import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title='Suffering from "100+ Day-Streak Syndrome on Duolingo?"'
    description="Most platforms treat language learning as a task/chore/game in your free time. We treat it as if you moved to that language-speaking country."
  >
    <VerticalFeatureRow
      title="Ditch the reading. Embrace the listening."
      description="Apps have inflated the importance of reading as you get started. The result is a bunch of langauge learners who can read a little, and cannot speak or understand the langauge. The first step to fluency is making the 'uncomfortable' listening comfortable."
      image="/assets/images/feature1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Adapt your learning to your life."
      description="Most learning apps make you jump through countless lessons that do not pertain to you. Let's start learning what you can directly apply to your life right away. Your language. Your choice. Your life."
      image="/assets/images/feature2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Change your inner voice."
      description="Don't just learn to translate from your mother tongue like the other language apps make you do. Embrace your different self as you speak a different inner language."
      image="/assets/images/feature3.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
