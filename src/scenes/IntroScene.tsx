import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {AbsoluteFill} from 'remotion';

export const IntroScene: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(frame, [0, fps], [0, 1]);

	return (
		<AbsoluteFill style={{backgroundColor: '#07110D', justifyContent: 'center', alignItems: 'center'}}>
			<img
				src="/logo.png"
				alt="FlowGenda"
				style={{width: 300, opacity}}
			/>
		</AbsoluteFill>
	);
};