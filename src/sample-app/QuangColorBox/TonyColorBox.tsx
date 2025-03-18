import { useState } from 'react';
import styles from './QuangColorBox.module.css';
import clsx from 'clsx';
import React from 'react';
import { getRandomColor } from '../../utils/randomColor';
enum Colors {
	AQUA = 'AQUA',
	RED = 'RED',
	YELLOW = 'YELLOW',
	PURPLE = 'PURPLE',
	RANDOM = 'RANDOM',
	ANTIQUEWHITE = 'ANTIQUEWHITE',
}

interface IBox {
	id: number,
	text: string,
	bgColor: string
}

const TonyColorBox = () => {
	const [number, setNumber] = React.useState(0);
	const [boxs, setBoxs] = React.useState<IBox[]>([]); // memory A

	function handleGenerateBox() {
		// how to convert number to array
		// const boxes = [...Array(number).keys()];
		const boxes = [];
		for (let i = 0; i < number; i++) {
			boxes.push({
				id: i,
				text: 'Box #' + i,
				bgColor: Colors.AQUA
			})
		}
		setBoxs(boxes);
	}

	function handleRandomBoxColor(boxId: number) {
		const clonedBoxs = [...boxs]; // shallow clone/copy
		const index = clonedBoxs.findIndex(box => box.id === boxId);
		if (index === -1) return;

		clonedBoxs[index].bgColor = getRandomColor();
		setBoxs(clonedBoxs);
	}

	console.log('boxexs: ', boxs)
	
	return (
		<>
			<div>
				<h1>Tony GeneraBox</h1>
				Number of boxes{' '}
				<input
					type="number"
					min={1}
					max={128}
					value={number}
					onChange={e => {
						setNumber(Number(e.target.value))
					}}
				/>
				<button onClick={handleGenerateBox}>Generate</button>
			</div>
			<div className={styles.wrapper}>
				{boxs.length > 0 ? (
					<>
						{boxs.map(box => (
							<div 
								key={box.id} 
								className={clsx(styles['box-container'])}
								style={{
									backgroundColor: box.bgColor
								}}
								onClick={() => handleRandomBoxColor(box.id)}
							>
								{box.text}
							</div>
						))}
					</>
				) : (
					<div>Please enter number ...</div>
				)}
			</div>
		</>
	);
};

export default TonyColorBox;
