const getAnime = async (type) => {
  const baseApi = `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&page=1&type=${type}`;
  const res = await fetch(baseApi);
  const info = await res.json();
  const res2 = await fetch(`${baseApi}&page=2`);
  const info2 = await res2.json();
  return [...info.data, ...info2.data];
};

export default getAnime;
