import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import DrumPad from './DrumPad';

const drumData = [
	{
		id: 'Q',
		name: 'Heater 1',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		id: 'W',
		name: 'Heater 2',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		id: 'E',
		name: 'Heater 3',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		id: 'A',
		name: 'Heater 4',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		id: 'S',
		name: 'Clap',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		id: 'D',
		name: 'Open-HH',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		id: 'Z',
		name: 'Kick-n\'-Hat',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		id: 'X',
		name: 'Kick',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		id: 'C',
		name: 'Closed-HH',
		src:
			'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

function DrumMachine() {
	const [displayText, setDisplayText] = useState('');
	const [pressedButtonName, setPressedButtonName] = useState('');

	const playAudio = (name) => {
		setDisplayText(name);
		setPressedButtonName(name);
	};

	return (
		<Container maxWidth="sm">
			<Paper style={{ padding: '20px', textAlign: 'center'}}>
				<h1>Drum Machine</h1>
				<Grid container spacing={2}>
					{drumData.map((item) => (
						<Grid item xs={4} key={item.id}>
							<DrumPad
								id={item.id}
								name={item.name}
								src={item.src}
								playAudio={playAudio}
								pressedButtonName={pressedButtonName}
							/>
						</Grid>
					))}
				</Grid>
				<div id="display">{displayText}</div>
			</Paper>
		</Container>
	);
}

export default DrumMachine;