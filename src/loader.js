export const jobsAndData = async () => {
    const jobdata = await fetch('fakejobs.json')
    const jobs = await jobdata.json()
    return jobs;
}
