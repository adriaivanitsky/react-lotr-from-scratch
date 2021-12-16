export async function getCharacters(race, search = '') {
  const urlParams = new URLSearchParams();
  if (race !== 'All') {
    urlParams.set('race', `eq.${race}`);
  }
  if (search.length > 0) {
    urlParams.set('name', `ilike.%${search}%`);
  }
  urlParams.set('select', '*');

  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/characters?${urlParams.toString()}`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );
  const data = await resp.json();

  return data;
}
