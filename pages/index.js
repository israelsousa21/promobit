import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Promobit - Filmes</title>
        <meta name="description" content="Os melhores filmes do TMDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}
