import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import { MovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-vidoes";



export default async function MovieDetails({

  params: { id },
}: {
  params: { id: string };
}) {
  return <div>
    <h3>Movie Detail Page</h3>
    <Suspense fallback={<h1>Loading Movie Info...</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading Movie Video...</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}