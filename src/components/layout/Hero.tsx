import HeroImage from "@/assets/images/hero.png";
import Logo from "@/assets/images/logo.svg";
import { ModeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <div className="relative mx-auto flex w-full flex-col py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={Logo} className="size-10" alt="Logo" />
            <h4 className="font-semibold text-3xl">
              Blog<span className="text-primary">Marshal</span>
            </h4>
          </Link>
          <div className="md:hidden">
            <ModeToggle />
          </div>
        </div>

        <nav className="hidden md:flex md:justify-end md:space-x-4">
          <ModeToggle />
          <LoginLink>
            <Button variant={"secondary"}>Sign In</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Sign Up</Button>
          </RegisterLink>
        </nav>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative w-full items-center py-12 lg:py-20">
          <div className="text-center">
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary text-sm tracking-tight">
              Ultimate Blogging SaaS for Startups
            </span>

            <h1 className="mt-8 font-medium text-4xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              Setup your Blog{""}
              <span className="block-text-primary">in Minutes!</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl font-light text-base text-muted-foreground tracking-tighter lg:text-lg">
              Setting up your blog is hard and time consuming. We make it easy for you to create a
              blog in minutes.
            </p>
            <div className="mt-5 flex w-full items-center justify-center gap-x-5">
              <LoginLink>
                <Button variant={"secondary"}>Sign In</Button>
              </LoginLink>
              <RegisterLink>
                <Button>Try for Free!!!</Button>
              </RegisterLink>
            </div>
          </div>

          <div className="relative mx-auto mt-12 w-full items-center py-12">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              className="-mt-24 absolute blur-3xl"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0" />
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8" />
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4" />
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF" />
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  />
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666" />
                </filter>
              </defs>
            </svg>

            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              className="relative w-full rounded-lg border object-cover shadow-2xl lg:rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
