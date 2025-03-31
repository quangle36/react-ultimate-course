import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

enum TrafficLight {
	GREEN = 'GREEN',
	YELLOW = 'YELLOW',
	RED = 'RED',
}

const TraficLight = () => {
	const [activeColor, setActiveColor] = useState(TrafficLight.GREEN);
	const intervalRef = useRef<number | null>(null);

	const lightSequence = [
		TrafficLight.GREEN,
		TrafficLight.YELLOW,
		TrafficLight.RED,
	];

	const durations = [4000, 3000, 500];
	useEffect(() => {
		let currentIndex = 0;

		const changeLight = () => {
			setActiveColor(lightSequence[currentIndex]);
			currentIndex = (currentIndex + 1) % lightSequence.length;
			intervalRef.current = setTimeout(changeLight, durations[currentIndex]);
		};

		intervalRef.current = setTimeout(changeLight, durations[currentIndex]);

		return () => {
			if (intervalRef.current) clearTimeout(intervalRef.current);
		};
	}, []);

	return (
		<div className="flex flex-col bg-black w-fit">
			<div className="text-white">{activeColor}</div>
			<div
				className={cn('w-40 h-40 rounded-full bg-gray-500', {
					'bg-red-500': activeColor === TrafficLight.RED,
				})}
			></div>
			<div
				className={cn('w-40 h-40 rounded-full bg-gray-500', {
					'bg-yellow-500': activeColor === TrafficLight.YELLOW,
				})}
			></div>
			<div
				className={cn('w-40 h-40 rounded-full bg-gray-500', {
					'bg-green-500': activeColor === TrafficLight.GREEN,
				})}
			></div>
		</div>
	);
};

export default TraficLight;
