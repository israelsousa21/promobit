import {Container, Section } from './List.elements'; 
import Cardmovies from '../Cardmovie/Cardmovie';

function List(props){
    return(
        <Container>
            <Cardmovies dark={props.dark} />
            <Cardmovies dark={props.dark} />
            <Cardmovies dark={props.dark} />
            <Cardmovies dark={props.dark} />
            <Cardmovies dark={props.dark} />
        </Container>
    )
}

export default List;