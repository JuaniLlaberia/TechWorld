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

export const getUser = async () => {};

export const getUsersByProfession = async (profession, limit) => {
  const data = await fetch(
    `http://localhost:8000/api/users?search=${profession}&limit=${limit}`,
    { credentials: 'include' }
  );
  const users = await data.json();

  return users;
};
