import axios from "axios";
import { BASE, MOVIES_URL, MOVIES_DETAILS_URL } from "constants/routes";
import MovieCard from "components/MovieCard";

const Index = props => (
    <div>
        {props.movies.map(movie => (
            <MovieCard
                key={movie.id}
                title={movie.title}
                director={movie.director}
                description={movie.description}
            />
        ))}
    </div>
);

Index.getInitialProps = async function() {
    const moviesData = await axios.get(MOVIES_URL);

    return {
        movies: moviesData.data
    };
};

export default Index;
