import Image from "next/image";
import ProfilePic from "../public/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="flex items-center text-foreground w-full min-h-screen">
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
            <p className="my-4">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
