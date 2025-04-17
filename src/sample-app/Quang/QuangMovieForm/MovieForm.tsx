import { useState } from 'react';
import { useMovieContext } from '../../../contexts/MovieContext';
import MovieList from './MovieList';

const MovieForm = () => {
	const { addMovie } = useMovieContext();
	const [movieName, setMovieName] = useState('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMovieName(e.target.value);
	};
	const handleAddMovie = () => {
		if (!movieName.trim()) return;
		addMovie({ name: movieName });
		setMovieName('');
	};
	return (
		<div>
			<h1>Movie Form</h1>
			<div>
				<span>Name</span>
				<input onChange={handleInputChange} />
				<button onClick={handleAddMovie}>Add</button>
			</div>
			<MovieList />
		</div>
	);
};

export default MovieForm;
