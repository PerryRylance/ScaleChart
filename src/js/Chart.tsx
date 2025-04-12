import { ChangeEvent, useState } from "react";

import Scale from './Scale';
import CircleOfFifths from './CircleOfFifths';
import Fretboard from './Fretboard';

import { Semitones, library as Scales, IScale } from "./Scale";

interface IChartState
{
	semitones: Semitones;
	key: number;
	tuning:	number[];
	frets: number;
}

interface IChartProps
{
	onStateChanged: Function;
}

function Chart({onStateChanged}: IChartProps)
{
	const majorScale: IScale = Scales.find(scale => scale.name === "Major")!;

	const [state, setState] = useState<IChartState>({
		semitones: majorScale.semitones,
		key: 0,
		tuning: [64, 59, 55, 50, 45, 40],
		frets: 13
	});

	function onKeyChange(event: ChangeEvent<HTMLInputElement>)
	{
		setState({
			...state,
			key: parseInt(event.target.value)
		});
	}

	function onScaleChange(event: ChangeEvent<HTMLInputElement>)
	{
		const semitones = state.semitones;

		semitones[ parseInt(event.target.getAttribute("data-key")!) ] = event.target.checked;

		setState({
			...state,
			semitones: semitones
		});
	}

	function onTuningChange(event: ChangeEvent<HTMLInputElement>)
	{
		const tuning = state.tuning;

		tuning[ parseInt(event.target.getAttribute("data-index")!) ] = parseInt(event.target.value);

		setState({
			...state,
			tuning: tuning
		});
	}

	function onTuningPresetChange(event: ChangeEvent<HTMLSelectElement>)
	{
		setState({
			...state,
			tuning: JSON.parse(event.target.value)
		});
	}

	function onScalePresetChange(event: ChangeEvent<HTMLSelectElement>)
	{
		setState({
			...state,
			semitones: JSON.parse(event.target.value)
		});
	}

	return <form className="chart">
		<div className="abstract-controls">
			<CircleOfFifths 
				pitch={state.key}
				onChange={event => onKeyChange(event)}
			/>
			<Scale 
				semitones={state.semitones}
				onChange={event => onScaleChange(event)}
				onScalePresetChange={event => onScalePresetChange(event)}
			/>
		</div>
		<div className="instrument-controls">
			<Fretboard 
				tuning={state.tuning} 
				root={state.key} 
				semitones={state.semitones} 
				frets={state.frets}
				onTuningChange={event => onTuningChange(event)}
				onTuningPresetChange={event => onTuningPresetChange(event)}
			/>
		</div>
	</form>;
}

export default Chart;