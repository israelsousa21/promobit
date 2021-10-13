import { useState, useEffect } from 'react';
import { Container, Title, Genresitens, Genreitem } from './GenresList.elements';

function GenresList(props){
    
    function showGenres(){
        return props.genres.map((genre) => {
                return(
                    <Genreitem dark={props.dark} key={genre.id}>{genre.name}</Genreitem>
                )
        })
    }

    return(
        <Container>
            <Title dark={props.dark}>GENÊROS</Title>
            <Genresitens dark={props.dark}>
                {showGenres()}
            </Genresitens>
        </Container>        
    )
}

export default GenresList;