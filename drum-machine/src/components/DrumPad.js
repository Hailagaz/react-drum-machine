import React, { useEffect } from 'react';

const DrumPad = ({ pad, playSound }) => {
	const { key, id, sound } = pad;

	const handleKeyPress = (e) => {
		if (e.key.toUpperCase() === key) {
			playSound(sound);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [key, playSound, sound]);

	const handleClick = () => {
		playSound(sound);
	};

	return (
		<div
			className="drum-pad"
			id={id}
			onClick={handleClick}
			onKeyDown={handleKeyPress}
		>
			{key}
			<audio className="clip" id={key} src={`/sounds/${sound}`} />
		</div>
	);
};

export default DrumPad;
