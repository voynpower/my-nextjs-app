import { json } from "stream/consumers";
import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching videos${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  throw new Error("Something broke...")
  // const respnose = await fetch(`${API_URL}/${id}/videos`);
  // return respnose.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}