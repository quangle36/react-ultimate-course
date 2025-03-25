import React from 'react'
import { JobStory } from './data';
const INITIAL_SIZE_LOAD = 6;

function Tonycloned() {
  const [jobs, setJobs] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fetchJobs = async () => {
      const abc = JobStory.slice(
        (page - 1) * INITIAL_SIZE_LOAD,
        INITIAL_SIZE_LOAD * page
      ).map(async (id) => {
          const res = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          return res.json();
        })
        Promise.all(abc).then((values) => {
          console.log(values);
        });
      // const jobData = await Promise.all(
      //   JobStory.slice(
      //     (page - 1) * INITIAL_SIZE_LOAD,
      //     INITIAL_SIZE_LOAD * page
      //   ).map(async (id) => {
      //     const res = await fetch(
      //       `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      //     );
      //     return res.json();
      //   })
      // );
      // ['promise1', promise2]
    };
    fetchJobs();
  }, [page])

  return (
    <div>
      <h1>Tony Jobs Board</h1>

      <div className="p-2 border space-y-2 mb-4!">
        <h2 className="font-bold">Modern Realty (YC S24) Is Hiring</h2>
        <p>greenfish6 · 23/03/2025, 17:00:09</p>
      </div>  
      <div className="p-2 border space-y-2 mb-4!">
        <h2 className="font-bold">Modern Realty (YC S24) Is Hiring</h2>
        <p>greenfish6 · 23/03/2025, 17:00:09</p>
      </div>  

    
    </div>
  )
}

export default Tonycloned