import { ChangeEventHandler } from "react";

export type Semitones = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

export interface IScale
{
	name: string;
	semitones: Semitones;
	category: string;
}

interface IScaleProps
{
	semitones: Semitones;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onScalePresetChange: ChangeEventHandler<HTMLSelectElement>;
}

const intervals = [
	(<span>Root</span>),
	(<span>Minor 2<sup>nd</sup></span>),
	(<span>Major 2<sup>nd</sup></span>),
	(<span>Minor 3<sup>rd</sup></span>),
	(<span>Major 3<sup>rd</sup></span>),
	(<span>Perfect 4<sup>th</sup></span>),
	(<span>Tritone</span>),
	(<span>Perfect 5<sup>th</sup></span>),
	(<span>Minor 6<sup>th</sup></span>),
	(<span>Major 6<sup>th</sup></span>),
	(<span>Minor 7<sup>th</sup></span>),
	(<span>Major 7<sup>th</sup></span>)
];

const library: IScale[] = [
	{
		name: "Blank",
		semitones: [false, false, false, false, false, false, false, false, false, false, false, false],
		category: "Other"
	},
	{
		name: "Major",
		semitones: [true, false, true, false, true, true, false, true, false, true, false, true],
		category: "Diatonic"
	},
	{
		name: "Minor",
		semitones: [true, false, true, true, false, true, false, true, true, false, true, false],
		category: "Diatonic"
	},
	{
		name: "Locrian",
		semitones: [true, true, false, true, false, true, true, false, true, false, true, false],
		category: "Diatonic"
	},
	{
		name: "Dorian",
		semitones: [true, false, true, true, false, true, false, true, false, true, true, false],
		category: "Diatonic"
	},
	{
		name: "Phrygian",
		semitones: [true, true, false, true, false, true, false, true, true, false, true, false],
		category: "Diatonic"
	},
	{
		name: "Lydian",
		semitones: [true, false, true, false, true, false, true, true, false, true, false, true],
		category: "Diatonic"
	},
	{
		name: "Mixolydian",
		semitones: [true, false, true, false, true, true, false, true, false, true, true, false],
		category: "Diatonic"
	},
	{
		name: "Major Pentatonic",
		semitones: [true, false, true, false, true, false, false, true, false, true, false, false],
		category: "Pentatonic"
	},
	{
		name: "Minor Pentatonic",
		semitones: [true, false, false, true, false, true, false, true, false, false, true, false],
		category: "Pentatonic"
	},
	{
		name: "Major Blues",
		semitones: [true, false, true, true, true, false, false, true, false, true, false, false],
		category: "Blues"
	},
	{
		name: "Minor Blues",
		semitones: [true, false, false, true, false, true, true, true, false, false, true, false],
		category: "Blues"
	},
	{
		name: "Whole Tone",
		semitones: [true, false, true, false, true, false, true, false, true, false, true, false],
		category: "Other"
	},
	{
		name: "Octatonic (H-W)",
		semitones: [true, true, false, true, true, false, true, true, false, true, true, false],
		category: "Other"
	},
	{
		name: "Octatonic (W-H)",
		semitones: [true, false, true, true, false, true, true, false, true, true, false, true],
		category: "Other"
	}
];

function Scale({semitones, onChange, onScalePresetChange}: IScaleProps)
{
	const lis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => 
		<li key={i}>
			<label>
				<input 
					type="checkbox" 
					checked={semitones[i]} 
					onChange={event => onChange(event)}
					data-key={i}
					/>
				{intervals[i]}
			</label>
		</li>
	);

	const categories = [...new Set(library.map((scale) => scale.category))];

	return (
		<fieldset className="scale">
			<select onChange={onScalePresetChange}>
				{categories.map((category, index) => (
					<optgroup label={category} key={index}>
						{library
							.filter((scale) => scale.category === category)
							.map((scale, index) => (
								<option value={JSON.stringify(scale.semitones)} key={index}>
									{scale.name}
								</option>
							))}
					</optgroup>
				))}
			</select>
			<ol className="semitones">
				{lis}
			</ol>
		</fieldset>
	);
}

export default Scale;

export { library };