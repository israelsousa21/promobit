import { useState } from 'react';
import Head from 'next/head';
import {Page} from './index.elements';
import {TopBar, List} from '../components';
import GlobalStyle from '../styles/globalStyles';

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <>
      <GlobalStyle dark={isDarkMode ? true : false} />
      <Page dark={isDarkMode ? true : false}>
        <Head>
          <title>Promobit - Filmes</title>
          <meta name="description" content="Os melhores filmes do TMDB" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopBar dark={isDarkMode ? true : false}
                toggle={handleToggle}
        />
        <List dark={isDarkMode ? true : false} />
      </Page>
    </>
  )
}