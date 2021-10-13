import { Box } from '../Cardmovie/Cardmovie.elements';

export default function Cardmovies(props){
    return (
        <Box href={`/movie/${props.id}`} alt={props.title} title={props.title}
            post={props.post} 
            dark={props.dark}>
        </Box>
    )
}