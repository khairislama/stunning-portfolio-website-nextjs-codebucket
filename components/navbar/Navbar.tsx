import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "../Icons";
import CustomIconLink from "./CustomIconLink";

export const runtime = "edge";

export default function Navbar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <CustomIconLink href="https://twitter.com">
          <TwitterIcon />
        </CustomIconLink>
        <CustomIconLink href="https://twitter.com">
          <GithubIcon />
        </CustomIconLink>
        <CustomIconLink href="https://twitter.com">
          <LinkedInIcon />
        </CustomIconLink>
        <CustomIconLink href="https://twitter.com">
          <PinterestIcon />
        </CustomIconLink>
        <CustomIconLink href="https://twitter.com">
          <DribbbleIcon />
        </CustomIconLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
