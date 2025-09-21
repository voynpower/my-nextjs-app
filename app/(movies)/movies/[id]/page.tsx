import { Suspense } from "react";
import { getMovie, MovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-vidoes";

interface IParams {
  params: {id: string}
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return <div>
    <Suspense fallback={<h1>Loading Movie Info...</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading Movie Video...</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}

