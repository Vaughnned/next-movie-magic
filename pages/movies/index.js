import Link from "next/link";
export default function getGenres(props) {
  console.log(props.genres);

  return props.genres.map((item, index) => {
    return (
      <Link href={`/movies/list/${item.name}`}>
        <ul key={index}>
          <li>{item.name}</li>
        </ul>
      </Link>
    );
  });
}

export async function getStaticProps() {
  const genres = await fetch("http://localhost:3000/api/movies");
  console.log(genres);
  const genreData = await genres.json();
  console.log(genreData);
  return { props: genreData };
}
