"use client";
import AnimateWrapper from "@/components/animate-in-wrapper";
import { Origami } from "@/components/origami-component";
import { RevealText } from "@/components/reveal-text";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <div className=" mx-auto max-w-7xl  flex gap-4 flex-col justify-center items-center mt-10">
        <AnimateWrapper delay={0.1}>
          {/* follow us on twitter component */}
          <div className="w-[120px] md:w-[200px] ml-auto">
            <div className="mb-1.5 rounded-full bg-zinc-600">
              <Link
                href="/"
                target="_blank"
                rel="nofollow"
                className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
              >
                <span className="rounded-full bg-blue-600 px-2 py-0.5 font-medium text-white">
                  HEY!
                </span>
                <span className="ml-1.5 mr-1 dark:text-black inline-block">
                  <span className="max-md:hidden">Follow us on</span>
                  twitter
                </span>
              </Link>
            </div>
          </div>
        </AnimateWrapper>
        <AnimateWrapper delay={0.2}>
          <div className="flex max-md:flex-col items-center justify-around">
            <AnimateWrapper delay={0.3}>
              <Origami />
            </AnimateWrapper>
            <h1 className="text-center md:text-start text-4xl tracking-tighter leading-[1.15] md:text-6xl font-light md:leading-[1.15]">
              End hunger, reduce waste. Donate surplus food. Sign up, Surplus
              Serve
            </h1>
          </div>
        </AnimateWrapper>
        <AnimateWrapper delay={0.4}>
          <div className="flex gap-4 justify-center items-center max-md:mt-10">
            <motion.div
              initial={{ x: 10, rotate: 10 }}
              animate={{ x: -10, rotate: -40 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
              }}
              className="text-4xl max-md:hidden"
            >
              👉
            </motion.div>
            <RevealText href="/users">Users</RevealText>
            <RevealText href="/restraunts">Restraunts</RevealText>
            <RevealText href="/ngos">NGOs</RevealText>
          </div>
        </AnimateWrapper>
      </div>
      <BrowserComponent />
      <div className="w-[95%] rounded-full h-0.5 mx-auto my-10 bg-gray-300 dark:bg-gray-600 px-4" />
      <AnimateWrapper>
        <div className="text-6xl text-center mt-10">Test</div>
      </AnimateWrapper>
    </main>
  );
}

function BrowserComponent() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
      className=" h-96 w-[calc(100vw_-_56px)] max-w-[1100px] mx-auto mt-10 lg:mt-16 overflow-hidden rounded-xl bg-zinc-600 p-0.5"
    >
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-0.5">
          <span className="size-2 rounded-full bg-red-400"></span>
          <span className="size-2 rounded-full bg-yellow-400"></span>
          <span className="size-2 rounded-full bg-green-400"></span>
        </div>
        <span className="rounded bg-zinc-600 px-2 py-0.5 text-xs text-zinc-100">
          server-surplus.vercel.app
        </span>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div className="relative z-0 grid h-full w-full grid-cols-[100px,_1fr] overflow-hidden rounded-t-lg bg-white md:grid-cols-[150px,_1fr]">
        <div className="h-full border-r border-zinc-300 p-2">
          <Image
            src={logo}
            alt="logo-image"
            className="size-10 rounded-3xl border"
          />
          <div className=" flex flex-col gap-1.5 justify-start items-end pr-4 pt-4 text-xs text-indigo-600">
            <Link href={"/help"}>Messages</Link>
            <Link href={"/docs/aim"}>Aim</Link>
            <Link href={"/docs/faq"}>FAQs</Link>
          </div>
        </div>
        <div className="relative p-2">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded bg-zinc-200 px-1.5 py-1 pr-8 text-xs text-zinc-600">
              Search...
            </span>
            <div className="flex items-center gap-1.5 text-xl">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-indigo-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <Link href={"/dashboard"} className="text-sm dark:text-black ">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="h-full rounded-xl border border-dashed border-zinc-500 bg-zinc-100"></div>
        </div>
      </div>
    </motion.div>
  );
}
