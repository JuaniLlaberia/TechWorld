export const getJobs = async ({
  experience,
  jobType,
  place,
  query,
  page,
  location,
}) => {
  let baseUrl = `http://localhost:8000/api/jobs?`;

  if (query) {
    baseUrl = baseUrl + `search=${query}&`;
  }

  if (location) {
    baseUrl = baseUrl + `location=${location}&`;
  }

  if (experience && experience !== 'All') {
    baseUrl = baseUrl + `level=${experience}&`;
  }

  if (jobType && jobType !== 'All') {
    baseUrl = baseUrl + `type=${jobType}&`;
  }

  if (place && place !== 'All') {
    baseUrl = baseUrl + `workPlace=${place}&`;
  }

  baseUrl = baseUrl + `page=${page}`;

  const data = await fetch(baseUrl);

  if (!data.ok) throw new Error('Not able to load jobs now');

  return data.json();
};

export const getJob = async id => {
  const data = await fetch(`http://localhost:8000/api/jobs/${id}`);
  return data.json();
};

export const searchJobs = async query => {
  const data = await fetch(
    `http://localhost:8000/api/jobs?search=${query}&limit=3`
  );
  return data.json();
};

export const saveJob = async id => {
  const response = await fetch(
    `http://localhost:8000/api/users/save-post/${id}`,
    {
      method: 'POST',
      credentials: 'include',
    }
  );

  return response;
};

export const unSaveJob = async id => {
  const response = await fetch(
    `http://localhost:8000/api/users/unsave-post/${id}`,
    {
      method: 'POST',
      credentials: 'include',
    }
  );

  return response;
};

export const getMyJobs = async () => {
  const data = await fetch(`http://localhost:8000/api/jobs/my-jobs`, {
    credentials: 'include',
  });
  return data.json();
};

export const newJob = async body => {
  const response = await fetch('http://localhost:8000/api/jobs', {
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

export const deleteJob = async id => {
  const response = await fetch(`http://localhost:8000/api/jobs/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message.split(': ').at(-1));

  return data;
};

export const applyJob = async body => {
  const response = await fetch(`http://localhost:8000/api/jobs/apply`, {
    method: 'POST',
    credentials: 'include',
    body: body,
  });

  const data = await response.json();
  if (data.status === 'fail') throw new Error(data.message.split(': ').at(-1));

  return data;
};

export const updateJob = async body => {
  const response = await fetch(`http://localhost:8000/api/jobs/${body._id}`, {
    method: 'PATCH',
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

export const searchByQuery = async profession => {
  const fetchUsers = fetch(
    `http://localhost:8000/api/users?search=${profession}&limit=3&page=1`
  );
  const fetchJobs = fetch(
    `http://localhost:8000/api/jobs?search=${profession}&limit=3`
  );

  const responses = await Promise.all([fetchUsers, fetchJobs]);

  const users = await responses[0].json();
  const jobs = await responses[1].json();

  return { users, jobs };
};
