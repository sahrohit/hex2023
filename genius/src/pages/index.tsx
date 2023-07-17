import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

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
        <Hero />
        {/* <Speakers /> */}
        <Schedule />
        <Sponsors />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
