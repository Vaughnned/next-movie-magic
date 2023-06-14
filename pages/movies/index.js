import Link from "next/link";
export default function Page(props) {
  // console.log("firing", props);

  return props.genres.map((item, index) => {
    return (
      <Link key={index} href={`/movies/list/${item.name}`}>
        <ul>
          <li>{item.name}</li>
        </ul>
      </Link>
    );
  });
}

export async function getStaticProps() {
  const genres = await fetch("http://localhost:3000/api/movies");
  const genreData = await genres.json();
  return { props: genreData };
}
