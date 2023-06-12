import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function getMovieList() {
  const [movieList, setMovieList] = useState([]);
  const router = useRouter();
  const genre = router.query.genre;
  useEffect(() => {
    async function movies() {
      console.log({ genre });
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc?with_genres=${genre}&api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
      );

      const data = await response.json();
      setMovieList(data.results);
    }
    movies(genre);
  }, []);

  return (
    <>
      <h1>{genre} List</h1>
      {movieList?.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <ul>
            <li>{movie.title}</li>
          </ul>
        </Link>
      ))}
    </>
  );
}

// export async function getServerSideProps() {
//   // console.log("here", genre);
//   // const movies = await fetch(`http://localhost:3000/api/movies/genre?${genre}`);
//   // console.log(movies);
//   // const movieData = await movies.json();
//   // console.log(movieData);
//   // return { props: movieData };
// }
