export const login = async (email, password) => {
  const response = await fetch('http://localhost:8000/api/users/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};
