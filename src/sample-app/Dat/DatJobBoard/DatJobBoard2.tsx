import React from "react";

interface IJob {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const DatJobBoard2 = () => {
  const [jobStories, setJobStories] = React.useState([]);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

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
    const jobAPIs = jobSlice.map(async (job) => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${job}.json`);
      const data = await res.json();
      return data;
    });
    Promise.all(jobAPIs).then((value) => {
      setJobs((preState) => [...preState, ...value]);
      setLoading(false);
    });
  }, [jobStories, page, loading]);

  return (
    <div>
      <h1>Dat Job Board 2</h1>

      <div className="job">
        {jobs.map((job) => (
          <div className="post" key={job.id}>
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
        className={`load-more-button ${jobStories.length === jobs.length ? "load-more-button-disable" : ""}`}
        onClick={() => {
          setPage((preState) => preState + 1);
          setLoading(true);
        }}
      >
        {loading ? "Loading..." : "Load more jobs"}
      </button>
    </div>
  );
};
export default DatJobBoard2;
