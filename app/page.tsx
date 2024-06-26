import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import ProfilePic from "../public/developer-pic-1.png";
import LightBulb from "../public/miscellaneous_icons_1.svg";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Khairi SLAMA | Home Page",
  description: "my description",
  keywords:
    "Khairi SLAMA, Khairi, Slama, Web developer, Tech engineer, software engineer",
};

export default function Home() {
  return (
    <main className="flex items-center text-foreground w-full min-h-screen">
      {/* Layout div without the pt-0 */}
      <div className="w-full h-full inline-block z-0 bg-background p-32 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={ProfilePic}
              alt="Khairi SLAMA"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-6xl text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target={"_blank"}
                className="flex items-center bg-foreground text-background p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-background hover:text-foreground border-2 border-solid border-transparent hover:border-foreground"
                download={true}
              >
                Resume
                <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:khairi.slama.1996.br@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-foreground underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={LightBulb} alt="Khairi SLAMA" className="w-full h-auto" />
      </div>
    </main>
  );
}
