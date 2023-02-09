import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '/layouts/MainLayout'
import Typography from '/components/Typography'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocean Investments</title>
        <meta name="description" content="Social investing platform with communities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex items-center justify-center align-middle">
      <div className="flex max-w-2xl">
        <div>
          <div className="text-white pt-40">
            <Typography variant="h1">From the ocean, to the moon</Typography>
          </div>
          <div className="text-white pt-4">
            <Typography variant="subtitle">Social investing made easy.</Typography>
          </div>
          <div className="text-white pb-4">
            <Typography variant="body">Get started with as little as 10 dollars today.</Typography>
          </div>
          <div className="">
            <Link href="/playground">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg px-2 w-64 text-center">
                <Typography className="text-white" variant="h2">Get Started</Typography>
              </div>
            </Link>
          </div>
          </div>
          <div className="max-w-[200px] mt-32">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0,50 C 15,20 45,20 60,50 C 75,80 105,80 120,50 L 120,100 L 0,100 L 0,50 L 0,50 Z" fill="white"/>
</svg>

          </div>

      </div>
      </div>
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;