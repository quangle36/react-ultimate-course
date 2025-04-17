import { useMovieContext } from '../../../contexts/MovieContext';
import MovieItem from './MovieItem';

const MovieList = () => {
	const { movies } = useMovieContext();
	return (
		<div>
			<h1>MovieList</h1>
			<ul>
				{movies.map((movie) => (
					<MovieItem name={movie.name} />
				))}
			</ul>
		</div>
	);
};

export default MovieList;
