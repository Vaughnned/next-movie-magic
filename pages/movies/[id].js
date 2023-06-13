import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function movieDescription({ movieId }) {
  const [movieList, setMovieList] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieOverview, setMovieOverview] = useState("");
  // const router = useRouter();
  // const routerId = router.query.id;
  // const genre = router.query.genre;

  // console.log(routerId);
  // console.log(movieList);

  const movieIndex = movieList.findIndex((i) => {
    // console.log(i);
    return i.id == movieId;
  });

  // console.log(movieIndex);

  // console.log(movieList);

  //   return (
  //     <>
  //       {/* <h1>Hello</h1>
  //       <h2>Movie Descriptions</h2> */}
  //       {movieList.map((movie, index) => {
  return (
    <>
      <Link href={"/movies/"}>
        <h1>Back to Movie List</h1>
      </Link>
      <h2>{movieList[movieIndex]?.title}</h2>
      <div>{movieList[movieIndex]?.overview}</div>
    </>
  );
  //       })}
  //     </>
  //   );
}
export async function getServerSideProps(context) {
  // console.log(context.query.id);
  const id = context.query.id;
  const movies = await fetch(`http://localhost:3001/api/movies/${id}`);
  const movieList = await movies.json();
  return { props: { movieId: movieList } };
}

// useEffect(() => {
//   async function movies() {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc?with_genres=${genre}&api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
//     );

//     const data = await response.json();
//     setMovieList(data.results);
//   }
//   movies(genre);
// }, []);
