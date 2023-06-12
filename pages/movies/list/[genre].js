import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function foo(props) {
  const [movieList, setMovieList] = useState("");
  const router = useRouter();
  const genre = router.query.genre;
  useEffect(() => {
    async function movies(movieGenre) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${movieGenre}&api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
      );

      const data = await response.json();
      setMovieList(data);
    }
    movies(genre);
  }, []);
  console.log(movieList);
  return <div>Here</div>;
}

// export async function getServerSideProps() {
//   // console.log("here", genre);
//   // const movies = await fetch(`http://localhost:3000/api/movies/genre?${genre}`);
//   // console.log(movies);
//   // const movieData = await movies.json();
//   // console.log(movieData);
//   // return { props: movieData };
// }
