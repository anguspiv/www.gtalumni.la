export const fetch = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Error fetching ${url}: ${res.statusText}`);
  }

  const data = await res.json();

  return data;
};

export default fetch;
