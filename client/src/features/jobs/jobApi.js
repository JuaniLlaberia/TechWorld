export const getJobs = async (experience, jobType, place) => {
  let baseUrl = `http://localhost:8000/api/jobs?`;

  if (experience && experience !== 'All') {
    baseUrl = baseUrl + `level=${experience}&`;
  }

  if (jobType && jobType !== 'All') {
    baseUrl = baseUrl + `type=${jobType}&`;
  }

  if (place && place !== 'All') {
    baseUrl = baseUrl + `workPlace=${place}&`;
  }

  console.log(baseUrl);

  const data = await fetch(baseUrl);
  const jobs = await data.json();
  return jobs;
};
