import Link from "next/link";
import { useRouter } from "next/router";

export default function getMovieList({ movieList, genre }) {
  return (
    <>
      <h1>{genre} List</h1>
      {movieList.results?.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <ul>
            <li>{movie.title}</li>
          </ul>
        </Link>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const movies = await fetch(`http://localhost:3001/api/movies/genre/${genre}`);
  const movieList = await movies.json();
  return { props: { movieList, genre } };
}

// export async function getServerSideProps() {
//   // console.log("here", genre);
//   // const movies = await fetch(`http://localhost:3000/api/movies/genre?${genre}`);
//   // console.log(movies);
//   // const movieData = await movies.json();
//   // console.log(movieData);
//   // return { props: movieData };
// }
