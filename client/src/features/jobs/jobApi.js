export const getJobs = async () => {
  const data = await fetch('http://localhost:8000/api/jobs');
  const jobs = await data.json();
  return jobs;
};
