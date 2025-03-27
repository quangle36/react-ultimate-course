import React from 'react'

/*
get jobs stories
https://hacker-news.firebaseio.com/v0/jobstories.json
[
  43492680,
  43491060,
  43484283,
  43473478,
  43459100,
]

get job
https://hacker-news.firebaseio.com/v0/item/38667654.json

[43492680,43491060,43484283,43473478,43459100]
[
  https://hacker-news.firebaseio.com/v0/item/43492680.json,
  https://hacker-news.firebaseio.com/v0/item/43491060.json,
  https://hacker-news.firebaseio.com/v0/item/43484283.json,
  https://hacker-news.firebaseio.com/v0/item/43473478.json,
  https://hacker-news.firebaseio.com/v0/item/43459100.json,
]

*/
interface IJob {
  "by": string,
  "id": number,
  "score": number,
  "time": number,
  "title": string,
  "type": string,
  "url": string,
}

function TonyJobBoard() {
  const [jobStories, setJobStories] = React.useState([]);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    async function fetchJobStories() {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
      const data = await res.json();
      setJobStories(data)
    }
    fetchJobStories();
  }, [])

  React.useEffect(() => {
    if (jobStories.length === 0) return;
    // const jobs = jobStories.slice(0, 5); // page 0
    // const jobs = jobStories.slice(5, 10); // page 1
    // const jobs = jobStories.slice(10, 15); // page 2
    const jobs = jobStories.slice(page * 5, page * 5 + 5); // page 1
    const jobsApis = jobs.map(async (job) => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${job}.json`);
      const data = await res.json();
      return data;
    })
    Promise.all(jobsApis).then(values => {
      setJobs(prevState => [...prevState, ...values])
    })
  }, [jobStories, page])

  return (
    <div>
      <h1>TonyJobBoard</h1>
      <div className="jobs"> 
        {jobs.map(job => (
          <div key={job.id} className="post">
            <h2 className="post__title">{job.title}</h2>
            <p className="post__metadata">
              By {job.by} · {new Date(job.time * 1000).toLocaleString('en-GB', {
									timeZone: 'UTC',
								})}
              </p>
          </div>
        ))}
      </div>

      <button 
        className={`load-more-button ${jobs.length === jobStories.length ? 'load-more-button-disabled' : ''} `}
        onClick={() => setPage(prevState => prevState + 1)}
      >
          Load more jobs
      </button>
    </div>
  )
}

export default TonyJobBoard