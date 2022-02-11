import Head from 'next/head'
import ResponsiveAppBar from './components/ResponsiveAppBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars</title>
      </Head>

      <main>
        <ResponsiveAppBar/>
        <h1>
          Welcome to my Next.js app!
        </h1>
        
      </main>
    </div>
  )
}
