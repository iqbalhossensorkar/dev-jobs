import { getStoredJob } from "../utility/fakeLocalDb"


export const appliedJobsData = async () => {
  const jobsData = await fetch('/fakeJobs.json')
  const jobs = await jobsData.json()
  // console.log(jobs);

  const savedJobs = getStoredJob();
  const initialJob = []
  for (const id in savedJobs) {
    const foundJob = jobs.find(job => job.id === parseInt(id))
    console.log(foundJob);
    if (foundJob) {
      foundJob.quantity = savedJobs[id]
      initialJob.push(foundJob)
    }
  }

  return { jobs, initialJob }
}