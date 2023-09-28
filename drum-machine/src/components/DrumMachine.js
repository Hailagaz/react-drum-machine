import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

const DrumMachine = () => {
	const drumPads = [
		{ key: 'Q', id: 'Heater-1', sound: 'sound1.mp3' },
		{ key: 'W', id: 'Heater-2', sound: 'sound2.mp3' },
		{ key: 'E', id: 'Heater-3', sound: 'sound3.mp3' },
		{ key: 'A', id: 'Heater-4', sound: 'sound4.mp3' },
		{ key: 'S', id: 'Clap', sound: 'sound5.mp3' },
		{ key: 'D', id: 'Open-HH', sound: 'sound6.mp3' },
		{ key: 'Z', id: 'Kick-n\'-Hat', sound: 'sound7.mp3' },
		{ key: 'X', id: 'Kick', sound: 'sound8.mp3' },
		{ key: 'C', id: 'Closed-HH', sound: 'sound9.mp3' },
	];

	const playSound = (sound) => {
		const audio = new Audio(`/sounds/${sound}`);
		audio.play();
	};

	return (
		<div id="drum-machine">
			<div className="pad-bank">
				{drumPads.map((pad) => (
					<DrumPad key={pad.id} pad={pad} playSound={playSound} />
				))}
			</div>
			<Display />
		</div>
	);
};

export default DrumMachine;
