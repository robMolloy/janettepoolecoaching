import { Typography } from "@/components";
import { DaisyHero } from "@/components/DaisyHero";

const Parent = () => {
  return (
    <main className={`min-h-screen`}>
      <DaisyHero backgroundImageUrl="/img/redwood.png" heading="Coaching Together">
        Reach your potential
      </DaisyHero>
      <Typography fullPage>asd</Typography>
    </main>
  );
};

export default Parent;
