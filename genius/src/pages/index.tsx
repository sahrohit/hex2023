import Head from "next/head"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import FAQ from "@/components/FAQ"
import { Schedule } from "@/components/Schedule"
import { Sponsors } from "@/components/Sponsors"
import { Countdown } from "@/components/Countdown"

export default function Home() {
  return (
    <>
      <Head>
        <title>HExGenius - Let&apos;s get Hacking!</title>
        <meta
          name="description"
          content="HExGenius: Empowering young innovators through a 36-hour hackathon where diverse talents unite to solve real-world issues. Join the global force for change! "
        />
      </Head>
      <Header />
      <main>
        <Countdown />
        <Hero />
        <Schedule />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
