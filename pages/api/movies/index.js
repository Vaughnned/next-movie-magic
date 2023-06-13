export default async function (req, res) {
  // console.log(process.env.NEXT_PUBLIC_MOVIE_KEY);

  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
  );
  res.json(await response.json());
}

//   return await new Promise((resolve, reject) =>
//     fetch(
//       `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
//     )
//       .then(async (response) => {
//         res.json(await response.json());
//         resolve();
//       })
//       // .then((response) => console.log(response))
//       .catch((err) => console.error(err))
//   );

// getData().then((response) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.setHeader("Cache-Control", "max-age=180000");
//   res.end(JSON.stringify(response));
//   resolve();
// });
//         .catch(error => {
//           res.json(error);
//           res.status(405).end();
//           resolve(); // in case something goes wrong in the catch block (as vijay commented)
//         });
//     });
//   };
