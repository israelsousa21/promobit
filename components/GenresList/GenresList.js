import { Container, Title, Genresitens, Genreitem } from './GenresList.elements';
import { useState, useEffect } from "react";

function GenresList(props){
    const [selectedGenres, setselectedGenres] = useState([]);
    const [update, setUpdate] = useState(null);
    const [renderGenres, setRenderGenres] = useState([]);

    useEffect(() => {
        setRenderGenres(props.genres);
      },[]);
      
      useEffect(() => {
        //console.log('Filtro: '+selectedGenres)
        setRenderGenres(showGenres(selectedGenres));
      }, [update]);
    
    function Listgerens(id){
            var indice = selectedGenres.indexOf(id);
            //console.log('Indice: '+indice);
            if(indice > -1){
                while(indice >= 0){
                    //console.log('Antes: '+selectedGenres)
                    selectedGenres.splice(indice, 1);
                    indice = selectedGenres.indexOf(id);
                }

                setselectedGenres(selectedGenres); 
                //console.log('Depois: '+selectedGenres)
                //console.log('New: '+selectedGenres);
            }else{
                setselectedGenres((currentGenres) => [...currentGenres, id]);
                //console.log('Caiu aqui')
            }
            setUpdate(Math.random());
            props.genresFilter(selectedGenres);
    }

    const showGenres = () =>{
        var selected = false;
        return props.genres.map((genre) => {
         selectedGenres.includes(genre.id) ? selected = true : selected = false;
            return(
                <Genreitem
                    selected={selected}
                    dark={props.dark} 
                    key={genre.id} 
                    onClick={e => Listgerens(genre.id)}>{genre.name}</Genreitem>
                )
        })
    }

    return(
        <Container>
            <Title dark={props.dark}>GENÊROS</Title>
            <Genresitens dark={props.dark}>
                {renderGenres}
            </Genresitens>
        </Container>        
    )
}

export default GenresList;