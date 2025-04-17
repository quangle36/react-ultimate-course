import React, { useEffect, useState } from 'react';
import { JobStory } from './data';
import { cn } from '../../../utils/cn';
const INITIAL_SIZE_LOAD = 6;

interface IJob {
	by: string;
	id: number;
	score: number;
	time: number;
	title: string;
	type: string;
	url: string;
}

const JobBoard = () => {
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [page, setPage] = useState(1);
	const [showLoadMore, setShowLoadMore] = useState(true);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchJobs = async () => {
			const jobData = await Promise.all(
				JobStory.slice(
					(page - 1) * INITIAL_SIZE_LOAD,
					INITIAL_SIZE_LOAD * page
				).map(async (id) => {
					const res = await fetch(
						`https://hacker-news.firebaseio.com/v0/item/${id}.json`
					);
					return res.json();
				})
			);
			setJobs((prev) => [...prev, ...jobData]);
			setLoading(false);
			if (jobData.length < INITIAL_SIZE_LOAD) {
				setShowLoadMore(false);
			}
		};
		fetchJobs();
	}, [page]);

	console.log('jobs', jobs);
	return (
		<div>
			<h1>Jobs Board</h1>
			{jobs.map((job) => (
				<div className="p-2 border space-y-2 mb-4!">
					<h2 className="font-bold">{job.title}</h2>
					<p>
						{job.by} ·{' '}
						{
							<>
								{new Date(job.time * 1000).toLocaleString('en-GB', {
									timeZone: 'UTC',
								})}
							</>
						}
					</p>
				</div>
			))}
			<button
				className={cn(
					{ ['hidden']: !showLoadMore },
					'p-2 rounded-lg bg-red-500 text-white'
				)}
				onClick={() => {
					setPage((prev) => prev + 1);
					setLoading(true);
				}}
			>
				{loading ? 'Loading...' : 'Load more jobs'}
			</button>
		</div>
	);
};

export default JobBoard;
