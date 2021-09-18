import { useState } from 'react';
import { Button } from 'react-bootstrap';

import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <Page dark={isDarkMode ? true : false}>
      <Head>
        <title>Promobit - Filmes</title>
        <meta name="description" content="Os melhores filmes do TMDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar dark={isDarkMode ? true : false}
              toggle={handleToggle}
      />
    </Page>
  )
}

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  transition: .5s;
  background: ${props => props.dark ? "#000" : "#fff"};
`;