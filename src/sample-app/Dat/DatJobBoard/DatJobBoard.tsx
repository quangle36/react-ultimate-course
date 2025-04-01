import React from "react";

// Get job stories = [43502357, 43500179, 43498109, 43495571, 43492680, 43491060]

// Get job = https://hacker-news.firebaseio.com/v0/item/38667654.json

/* 
    [43502357, 43500179, 43498109, 43495571, 43492680, 43491060]
[
    https://hacker-news.firebaseio.com/v0/item/43502357.json,
    https://hacker-news.firebaseio.com/v0/item/43500179.json,
    https://hacker-news.firebaseio.com/v0/item/43498109.json,
    https://hacker-news.firebaseio.com/v0/item/43495571.json,
    https://hacker-news.firebaseio.com/v0/item/43492680.json,
    https://hacker-news.firebaseio.com/v0/item/43491060.json,
]
*/

interface IJob {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const DatJobBoard = () => {
  const [jobStories, setJobStories] = React.useState([]);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    async function fetchJobStories() {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const data = await res.json();
      setJobStories(data);
    }
    fetchJobStories();
  }, []);

  React.useEffect(() => {
    if (jobStories.length === 0) return;
    const jobSlice = jobStories.slice(page * 6, page * 6 + 6);
    const JobApis = jobSlice.map(async (job) => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${job}.json`);
      const data = await res.json();
      return data;
    });
    Promise.all(JobApis).then((values) => {
      setJobs((preState) => [...preState, ...values]);
    });
  }, [jobStories, page]);

  return (
    <div>
      <h1>Dat Job Board</h1>

      <div className="jobs">
        {jobs.map((job) => (
          <div key={job.id} className="post">
            <h2 className="post__title">{job.title}</h2>
            <p className="post__metadata">
              By {job.by} ·{" "}
              {new Date(job.time * 1000).toLocaleString("en-GB", {
                timeZone: "UTC",
              })}
            </p>
          </div>
        ))}
      </div>

      <button
        className={`load-more-button ${jobs.length === jobStories.length ? "load-more-button-disable" : ""} `}
        onClick={() => setPage((preState) => preState + 1)}
      >
        Load more jobs
      </button>
    </div>
  );
};

export default DatJobBoard;
