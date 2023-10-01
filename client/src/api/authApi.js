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
  return data;
};

export const signup = async values => {
  const response = await fetch('http://localhost:8000/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};

export const forgotPassword = async email => {
  const response = await fetch(
    'http://localhost:8000/api/users/forgot-password',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  );

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};

export const resetPassword = async (password, passwordConfirm, token) => {
  const response = await fetch(
    `http://localhost:8000/api/users/reset-password/${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, passwordConfirm }),
    }
  );

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};

export const resendConfEmail = async email => {
  const response = await fetch(`http://localhost:8000/api/users/resend-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};

export const verifyEmail = async token => {
  const response = await fetch(
    `http://localhost:8000/api/users/verify/${token}`,
    {
      method: 'POST',
      credentials: 'include',
    }
  );

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};

export const logout = async () => {
  const response = await fetch(`http://localhost:8000/api/users/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message);
};
