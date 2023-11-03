export const getArticles = async ({ searchQuery, page }) => {
  let url = 'https://job-app-api-ten.vercel.app/api/articles?';

  if (searchQuery) url = url + `search=${searchQuery}&`;

  url = url + `page=${page}`;

  const data = await fetch(url);
  return data.json();
};

export const getArticle = async id => {
  const data = await fetch(
    `https://job-app-api-ten.vercel.app/api/articles/${id}`
  );
  return data.json();
};

export const createArticle = async body => {
  const response = await fetch(
    'https://job-app-api-ten.vercel.app/api/articles',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (data.status === 'fail') throw new Error(data.message.split(': ').at(-1));

  return data;
};

export const getMyArticles = async published => {
  const data = await fetch(
    `https://job-app-api-ten.vercel.app/api/articles/my-articles?type=${published}`,
    {
      credentials: 'include',
    }
  );
  return data.json();
};

export const deleteArticle = async id => {
  const response = await fetch(
    `https://job-app-api-ten.vercel.app/api/articles/${id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    }
  );

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message.split(': ').at(-1));

  return data;
};

export const updateArticle = async ({ id, newObj }) => {
  const response = await fetch(
    `https://job-app-api-ten.vercel.app/api/articles/${id}`,
    {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newObj),
    }
  );

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message.split(': ').at(-1));

  return data;
};
