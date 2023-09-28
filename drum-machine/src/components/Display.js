import React, { useState } from 'react';

const Display = () => {
	const [displayText, setDisplayText] = useState('');

	const updateDisplay = (text) => {
		setDisplayText(text);
	};

	return (
		<div id="display">
			{displayText}
		</div>
	);
};

export default Display;
