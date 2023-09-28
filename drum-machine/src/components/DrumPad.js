import React, { useRef, useEffect } from 'react';
import { Button } from '@mui/material';

function DrumPad({ id, src, name, playAudio }) {
	const audioRef = useRef(null);

	const onKeyDown = (event) => {
		if (event.key.toUpperCase() === id) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
			playAudio(name);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [id, name]);

	const onClick = () => {
		audioRef.current.currentTime = 0;
		audioRef.current.play();
		playAudio(name);
	};

	return (
		<Button
			variant="contained"
			color="primary"
			size="large"
			onClick={onClick}
			style={{ minWidth: '100px', minHeight: '100px' }}
		>
			{id}
			<audio ref={audioRef} className="clip" src={src}></audio>
		</Button>
	);
}

export default DrumPad;
