import { ChangeEventHandler, MouseEvent } from "react";
import { useAppContext } from "./AppContext";

import { Semitones } from "./Scale";

interface IStringProps {
	frets: number;
	tuning: number;
	root: number;
	index: number;
	semitones: Semitones;
	onTuningChange: ChangeEventHandler<HTMLInputElement>;
}

// TODO: Support maj/min, b/#, letters, degrees
const captions	= [
	"1",
	"♭2",
	"2",
	"♭3",
	"3",
	"4",
	"♭5",
	"5",
	"♭6",
	"6",
	"♭7",
	"7"
];

function String({frets, tuning, root, index, semitones, onTuningChange}: IStringProps)
{
	const context	= useAppContext();
	const lis		= [];

	const onMouseOverLocation = (event: MouseEvent<HTMLLIElement>) => {

		const element	= event.currentTarget as HTMLLIElement;
		const pitch		= element.getAttribute("data-pitch");

		context.setState({
			...context.state,
			cursor: pitch
		});

	}

	for(let i = 0; i < frets; i++)
	{
		let pitch		= (tuning + i);
		let position	= (pitch + (12 - (root % 12))) % 12;
		let caption		= captions[position];

		let button;

		if(semitones[position])
			button = (
				<button type="button">
					{caption}
				</button>
			);

		let cursor;

		if(context.state.cursor == pitch)
			cursor = <span className="cursor"></span>;

		lis.push((
			<li 
				key={`fret_${i}`}
				className="fret"
				data-pitch={pitch} 
				data-position={position}
				onMouseOver={event => onMouseOverLocation(event)}
			>
				{cursor}
				{button}
			</li>
		));
	}

	return (
		<div className="string">
			<label data-letter-semitone={tuning % 12}>
				<input 
					type="number" 
					value={tuning.toString()}
					data-index={index}
					onChange={onTuningChange}
					/>
			</label>

			<ol className="frets">
				{lis}
			</ol>
		</div>
	);
}

export default String;