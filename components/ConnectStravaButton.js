'use client';

export default function StravaConnectButton() {
  const handleConnect = () => {
    const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI;
    const scope = 'activity:read_all';

    const url = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=auto&scope=${scope}`;
    window.location.href = url;
    console.log('client_id:', clientId);
  };

  return (
    <button
      onClick={handleConnect}
      className="w-48 h-12 bg-orange-600 text-white 
      px-4 py-2 rounded hover:bg-orange-700 transition"
    >
      Connect with Strava
    </button>
  );
}
