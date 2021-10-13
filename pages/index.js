import { useState, useEffect } from 'react';
import Head from 'next/head';
import {Page} from '../styles/index.elements';
import {TopBar, List} from '../components';
import GlobalStyle from '../styles/globalStyles';

function Home(props) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkmode');
    if(darkMode == null) {
      localStorage.setItem('darkmode', isDarkMode);
    }else{
      setDarkMode(darkMode);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('darkmode', isDarkMode);
  }, [isDarkMode])

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <>
      <GlobalStyle dark={isDarkMode} />
      <Page dark={isDarkMode}>
        <Head>
          <title>Promobit - Filmes</title>
          <meta name="description" content="Os melhores filmes do TMDB" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopBar dark={isDarkMode} toggle={handleToggle} />
        <List dark={isDarkMode} />
      </Page>
    </>
  )
}

export default Home;