/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to Tree of Thought AGI
          <br className="hidden sm:inline" />
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Tree of Thought AGI is an open-source project aimed at exploring the
          potential of artificial general intelligence (AGI) using the
          innovative{" "}
          <span className="font-black text-white">Tree of Thoughts </span>
          framework. Our goal is to empower language models to go beyond
          token-level decision-making and enable them to perform deliberate and
          strategic reasoning in problem-solving tasks.
          <br />
          <br />
          With Tree of Thought AGI, we introduce a novel approach that allows
          language models to consider multiple reasoning paths, self-evaluate
          choices, and explore various possibilities to make informed decisions.
          By leveraging coherent units of text ("thoughts") and incorporating
          iterative analysis and exploration, our framework significantly
          enhances language models' problem-solving abilities.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          ⭐ GitHub
        </Link>
      </div>
    </section>
  )
}
