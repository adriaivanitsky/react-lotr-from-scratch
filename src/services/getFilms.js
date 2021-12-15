export async function getFilms(setFilms) {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/films?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();

  const filmData = data.map((item) => {
    return [
      item.title,
      item.title.replace(/\s+/g, '-').toLowerCase(),
      item.box_office_total,
      item.academy_award_nominations,
    ];
  });
  // console.log(movieData);

  setFilms(filmData);
  return data;
}
