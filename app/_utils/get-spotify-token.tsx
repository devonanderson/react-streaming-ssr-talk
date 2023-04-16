export default async function getSpotifyAccessToken(): Promise<any> {
  const encodedAuthToken = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64');
  const authOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${encodedAuthToken}`,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  };

  const res = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', authOptions);
  const data = await res.json();
  const accessToken = data.access_token;

  return accessToken;
};