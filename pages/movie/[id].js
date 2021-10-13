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
    const [idMovie, setIdMovie] = useState(null);
    const [isDarkMode, setDarkMode] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    
    useEffect(() => {
      if(id){
        setIdMovie(id);
      }
    }, [id]);

    async function loadMovie(id){
      const dataMovie = await getMovie(idMovie);
      setMovie(dataMovie);
    }

    function showGenres(genres){
      if(genres != null){
        return(
          genres.map((genre) => (
            <Genres key={genre.id} dark={isDarkMode}>{genre.name}</Genres>
          ))
        )
      }else{
        return('')
      }
      
    }

    function showMovie(movie){
      if(movie != null){
        return (
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
                    <Year> ({movie.release_date ? movie.release_date.substr(0,4) : ''})</Year>
                  </Title>
                  {
                    showGenres(movie.genres)
                  }
                </Details>
              </Content>
            </Page>
            </>
        )

      }else{

        return(
          <h1>Error 404!</h1>
        )

      }
    }

    useEffect(() => {
      if(idMovie != null){ loadMovie(); }
      
      const darkMode = localStorage.getItem('darkmode');
      if(darkMode == null) {
        localStorage.setItem('darkmode', isDarkMode);
      }else{
        setDarkMode(darkMode);
      }
    }, [idMovie]);
  
    useEffect(() => {
        localStorage.setItem('darkmode', isDarkMode);
    }, [isDarkMode])
  
    const handleToggle = () => {
      setDarkMode(!isDarkMode);
    }

 return( showMovie(movie) )

}

export default Movie;