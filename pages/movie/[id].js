import { useState, useEffect } from 'react';
import GlobalStyle from '../../styles/globalStyles';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { TopBar } from '../../components';
import { getMovie } from '../../services/index';
import { Page, 
         Section, 
         Content,
         Details,
         Cover, 
         Title,
         Year,
         Genres
} from '../../styles/movies.elements';

function Movie(){
    const [movie, setMovie] = useState({});
    const [isDarkMode, setDarkMode] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    async function loadMovie(){
      const dataMovie = await getMovie(id);
      setMovie(dataMovie);
    }

    useEffect(() => {
      loadMovie();
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

 return(
    <>
    <GlobalStyle dark={isDarkMode} bgcover={movie.poster_path} />
    <Page dark={isDarkMode}>
      <Head>
        <title>Promobit - {movie.title}</title>
        <meta name="description" content={movie.overview} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar dark={isDarkMode} toggle={handleToggle} />
      <Section dark={isDarkMode} />
      <Content>
        <Cover src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} dark={isDarkMode} />
        <Details>
          <Title dark={isDarkMode}>{movie.title}
            <Year> ({movie.release_date})</Year>
          </Title>
          <Genres dark={isDarkMode}>Ação</Genres>
        </Details>
      </Content>
    </Page>
  </>
 )
}

export default Movie;