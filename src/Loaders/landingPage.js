async function landingPage() {
    const Categories = await fetch('category.json');
    const jobCategoriesData = await Categories.json();
  
    const featured = await fetch('fakeJobs.json');
    const featuredJobsData = await featured.json();
    return {
      jobCategories: jobCategoriesData,
      featuredJobs: featuredJobsData
    };
  }
  
  export default landingPage;