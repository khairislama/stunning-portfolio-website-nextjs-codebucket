import AnimatedText from "@/components/AnimatedText";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Khairi SLAMA | About Page",
  description: "my description",
  keywords:
    "Khairi SLAMA, Khairi, Slama, Web developer, Tech engineer, software engineer",
};

function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="w-full h-full inline-block z-0 bg-background p-32 pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-foreground/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m Khairi SLAMA, a web developer and UI/UX designer with
              a passion for creating beautiful, functional, and user-centered
              digital experiences. With 2 years of experience in the field. I am
              always looking for new and innovative ways to bring my
              clients&apos; visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty - it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
