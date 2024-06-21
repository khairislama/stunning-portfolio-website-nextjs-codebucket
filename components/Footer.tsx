import Link from "next/link";

export const runtime = "edge";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-foreground font-medium text-lg">
      <div className="w-full h-full z-0 bg-background p-32 py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link
            href="/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Khairi SLAMA
          </Link>
        </div>
        <Link href="/" target="_blank" className="underline underline-offset-2">
          Say hello
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
