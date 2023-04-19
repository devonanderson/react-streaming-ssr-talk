import { Suspense } from "react";
import fetchWithDelay from "./_utils/fetch-with-delay";
import getSpotifyAccessToken from "./_utils/get-spotify-token";
import EntityList from "./_components/EntityList";
import SuspenseEntityList from "./_components/SuspenseEntityList";

async function getRecentlyPlayedSongs() {
  const accessToken = await getSpotifyAccessToken();
  const res = await fetchWithDelay("https://api.spotify.com/v1/tracks?ids=7rL602DQps4QmrrjbinLzP,4qw2e5hEBSQZvu6NEbkuJh,3UBUSMQXobHQMXkKsv9dgy,3h2CkNuAKSxZXWGElwcOvH,6TZ6vaiyYeMZzPef9hvnZL,73ptateUzEZc4xXGWlQpaa", { headers: { Authorization: `Bearer ${accessToken}` } }, 4000);
  const data = await res.json();
  return data.tracks;
}

async function getRecommendedArtists() {
  const accessToken = await getSpotifyAccessToken();
  const res = await fetchWithDelay("https://api.spotify.com/v1/artists?ids=0C0XlULifJtAgn6ZNCW2eu,3kjuyTCjPG1WMFCiyc5IuB,2cCUtGK9sDU2EoElnk0GNB,3WaJSfKnzc65VDgmj2zU8B,1yAwtBaoHLEDWAnWR87hBT,3qkZBMz5JgmRN9u5wwhRC6", { headers: { Authorization: `Bearer ${accessToken}` } }, 10000);
  const data = await res.json();
  return data.artists;
}

async function getRecommendedPlaylists() {
  const accessToken = await getSpotifyAccessToken();
  const res = await fetchWithDelay("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCWjUTdzaG0e/playlists?limit=6", { headers: { Authorization: `Bearer ${accessToken}` } }, 8000);
  const data = await res.json();
  return data.playlists.items;
}

export default async function Home() {
  // Promises are given directly to the component props.
  // This allows the Suspense component to take over
  // and wait for the promises to resolve.
  const recentlyPlayedSongs = getRecentlyPlayedSongs();
  const recommendedArtists = getRecommendedArtists();
  const recommendedPlaylists = getRecommendedPlaylists();

  return (
    <>
      <section className="p-8">
        <h2 className="font-body font-bold text-4xl mb-4">Good Morning/Afternoon</h2>
        <Suspense fallback={<SuspenseEntityList gridSize={3} count={6}/>}>
          {/* @ts-expect-error Server Component: TypeScript is still not sure how to handle an async component */}
          <EntityList dataPromise={recentlyPlayedSongs}/>
        </Suspense>
        <h3 className="font-body font-bold text-2xl mt-[40px] mb-4">Artist Recommendations</h3>
        <Suspense fallback={<SuspenseEntityList gridSize={3} count={6}/>}>
          {/* @ts-expect-error Server Component: TypeScript is still not sure how to handle an async component */}
          <EntityList dataPromise={recommendedArtists} />
        </Suspense>
        <h3 className="font-body font-bold text-2xl mt-[40px] mb-4">Recommended Playlists</h3>
        <Suspense fallback={<SuspenseEntityList gridSize={3} count={6}/>}>
          {/* @ts-expect-error Server Component: TypeScript is still not sure how to handle an async component */}
          <EntityList dataPromise={recommendedPlaylists} />
        </Suspense>
      </section>
    </>
  )
}
