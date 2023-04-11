// use local storage to manage cart data
const addToDb = id => {
    let addedJob = {}

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        addedJob = JSON.parse(storedJob)
    }

    // add quantity
    const quantity = addedJob[id]
    if (quantity) {
        const newQuantity = quantity + 1
        addedJob[id] = newQuantity
    } else {
        addedJob[id] = 1
    }
    localStorage.setItem('applied-job', JSON.stringify(addedJob))
}

const getStoredJob = () => {
    let addedJob = {}
  
    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
      addedJob = JSON.parse(storedJob)
    }
    return addedJob
  }


export { addToDb, getStoredJob}