import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies:${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>
}