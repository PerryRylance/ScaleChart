import React, { ChangeEventHandler } from 'react';
import { Semitones } from './Scale';
import String from "./String";

import { library } from './Tuning';

import "../css/Fretboard.scss";

interface IFretboardProps
{
	tuning: number[];
	frets: number;
	root: number;
	semitones: Semitones;
	onTuningChange: ChangeEventHandler<HTMLInputElement>;
	onTuningPresetChange: ChangeEventHandler<HTMLSelectElement>;
}

function Fretboard({tuning, frets, root, semitones, onTuningChange, onTuningPresetChange}: IFretboardProps)
{
	let i = 0;
	const numbers = [];

	for(i = 0; i < tuning.length; i++)
		numbers.push(i);

	const strings = numbers.map((i) => 
		<li key={i}>
			<String 
				frets={frets} 
				tuning={tuning[i]} 
				root={root} 
				semitones={semitones}
				index={i}
				onTuningChange={onTuningChange}
			/>
		</li>
	);

	const instruments = [...new Set(library.map((tuning) => tuning.instrument))];

	return (
		<fieldset className="fretboard">
			<ol className="strings">
				{strings}
			</ol>
			<div>
				<select onChange={onTuningPresetChange}>
					{instruments.map((instrument, index) => (
						<optgroup label={instrument} key={index}>
							{library
								.filter((tuning) => tuning.instrument === instrument)
								.map((tuning, index) => (
									<option value={JSON.stringify(tuning.pitches)} key={index}>
										{tuning.name}
									</option>
								))}
						</optgroup>
					))}
				</select>
			</div>
		</fieldset>
	);
}

export default Fretboard;