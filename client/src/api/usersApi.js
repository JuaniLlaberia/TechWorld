export const getMe = async () => {
  const data = await fetch('http://localhost:8000/api/users/me', {
    method: 'GET',
    credentials: 'include',
  });

  return await data.json();
};

export const updateMe = async newData => {
  const data = await fetch('http://localhost:8000/api/users/update-me', {
    method: 'PATCH',
    credentials: 'include',
    // body: newData,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });

  return data.json();
};

export const getUser = async id => {
  const data = await fetch(`http://localhost:8000/api/users/${id}`, {
    credentials: 'include',
  });
  return data.json();
};

export const getUsersByProfession = async ({ profession, limit, page }) => {
  const data = await fetch(
    `http://localhost:8000/api/users?search=${profession}&limit=${limit}&page=${page}`,
    { credentials: 'include' }
  );
  return data.json();
};

export const getMySaved = async () => {
  const data = await fetch('http://localhost:8000/api/users/saved-posts', {
    credentials: 'include',
  });

  return data.json();
};
