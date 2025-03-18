import { useState } from 'react';
import styles from './QuangColorBox.module.css';
import clsx from 'clsx';
import React from 'react';
enum Colors {
	AQUA = 'AQUA',
	RED = 'RED',
	YELLOW = 'YELLOW',
	PURPLE = 'PURPLE',
	RANDOM = 'RANDOM',
	ANTIQUEWHITE = 'ANTIQUEWHITE',
}
const QuangColorBox = () => {
	const [activeColor, setActiveColor] = useState<Colors>(Colors.ANTIQUEWHITE);
	const [boxes, setBoxes] = useState(0);
	const [isGenerated, setIsGenerated] = useState(false);
	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const handleSetColor = (color: Colors) => {
		setActiveColor(color);
	};
	const genRandomColor = () => {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	};
	
	return (
		<>
			<div>
				Number of boxes{' '}
				<input
					type="number"
					min={1}
					max={128}
					onChange={(e) => {
						setActiveColor(Colors.ANTIQUEWHITE);
						setIsGenerated(false);
						setBoxes(+e.target.value);
					}}
				/>
				<button onClick={() => setIsGenerated(true)}>Generate</button>
			</div>
			<div className={styles.wrapper}>
				{boxes === 0 ? (
					<div>No box</div>
				) : (
					isGenerated &&
					Array.from({ length: boxes }).map((genBox, index) => (
						<div
							style={{
								backgroundColor:
									(activeColor === Colors.RANDOM && genRandomColor()) || '',
							}}
							onClick={() => {
								forceUpdate();
								handleSetColor(Colors.RANDOM);
							}}
							className={clsx(styles['box-container'])}
						>
							Box #{index + 1}
						</div>
					))
				)}
			</div>
		</>
	);
};

export default QuangColorBox;
