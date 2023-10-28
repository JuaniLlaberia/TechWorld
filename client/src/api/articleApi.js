export const getArticles = async ({ searchQuery, page }) => {
  let url = 'http://localhost:8000/api/articles?';

  if (searchQuery) url = url + `search=${searchQuery}&`;

  url = url + `page=${page}`;

  console.log(url);

  const data = await fetch(url);
  return data.json();
};

export const getArticle = async id => {
  const data = await fetch(`http://localhost:8000/api/articles/${id}`);
  return data.json();
};

export const createArticle = async body => {
  const response = await fetch('http://localhost:8000/api/articles', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (data.status === 'fail') throw new Error(data.message.split(': ').at(-1));

  return data;
};

export const getMyArticles = async published => {
  const data = await fetch(
    `http://localhost:8000/api/articles/my-articles?type=${published}`,
    {
      credentials: 'include',
    }
  );
  return data.json();
};
