export default async function (req, res) {
  console.log("HELLO", req.query);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${req.query.movie}?language=en-US&api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
    //  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc?with_genres=${genre}&api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
  );
  res.json(await response.json());
  // console.log("HERE", res);
}
