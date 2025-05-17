// app/api/strava/callback/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const res = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }),
  });

  const data = await res.json();

  // Optionally store data.access_token somewhere
  console.log('Strava access token:', data.access_token);

  return new Response(JSON.stringify({ success: true, data }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
