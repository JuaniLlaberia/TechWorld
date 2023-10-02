export const getJobs = async (
  experience,
  jobType,
  place,
  query,
  page,
  location
) => {
  let baseUrl = `http://localhost:8000/api/jobs?page=${page}&`;

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

  const data = await fetch(baseUrl);
  const jobs = await data.json();
  return jobs;
};

export const getJob = async () => {};

export const searchJobs = async query => {
  const data = await fetch(
    `http://localhost:8000/api/jobs?search=${query}&limit=5`
  );
  const jobs = await data.json();
  return jobs;
};
