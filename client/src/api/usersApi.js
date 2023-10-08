export const getMe = async () => {
  const data = await fetch('http://localhost:8000/api/users/me', {
    method: 'GET',
    credentials: 'include',
  });

  const user = await data.json();
  return user;
};

export const updateMe = async newData => {
  const data = await fetch('http://localhost:8000/api/users/update-me', {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });

  const user = await data.json();
  return user;
};

export const getUser = async id => {
  const data = await fetch(`http://localhost:8000/api/users/${id}`, {
    credentials: 'include',
  });
  const user = await data.json();

  return user;
};

export const getUsersByProfession = async ({ profession, limit, page }) => {
  const data = await fetch(
    `http://localhost:8000/api/users?search=${profession}&limit=${limit}&page=${page}`,
    { credentials: 'include' }
  );
  const users = await data.json();

  return users;
};

export const getMySaved = async () => {
  const data = await fetch('http://localhost:8000/api/users/saved-posts', {
    credentials: 'include',
  });

  const users = await data.json();

  return users;
};
