export const getMe = async () => {
  const data = await fetch('http://localhost:8000/api/users/me', {
    method: 'GET',
    credentials: 'include',
  });

  return await data.json();
};

export const updateMe = async newData => {
  const isFormData = ['description', 'skills', 'experience'].some(el =>
    // eslint-disable-next-line no-prototype-builtins
    newData.hasOwnProperty(el)
  );

  const optionsWithImage = {
    method: 'PATCH',
    credentials: 'include',
    body: newData,
  };

  const optionsRegular = {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  };

  const data = await fetch(
    'http://localhost:8000/api/users/update-me',
    isFormData ? optionsRegular : optionsWithImage
  );

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
