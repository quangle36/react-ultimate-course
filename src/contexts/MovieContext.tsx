import React, { useState } from 'react';

interface IMovie {
	name: string;
}

interface IMovieContext {
	movies: IMovie[];
	addMovie: (item: IMovie) => void;
}
export const MovieContext = React.createContext<IMovieContext>({
	movies: [],
	addMovie: () => {},
});

export const MovieContextProvider = ({ children }: React.PropsWithChildren) => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	console.log('movies', movies);
	function addMovie(movieItem: IMovie) {
		setMovies((prev) => [...prev, movieItem]);
	}
	return (
		<MovieContext.Provider value={{ movies, addMovie }}>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovieContext = () => React.useContext(MovieContext);
