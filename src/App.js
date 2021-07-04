import React from 'react';
import Scale from './Scale';
import Key from './Key';
import Fretboard from './Fretboard';

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			semitones:	[true, false, true, false, true, true, false, true, false, true, false, true],
			key:		60,
			tuning:		[64, 59, 55, 50, 45, 40],
			frets:		13
		};
	}

	onKeyChange(event)
	{
		this.setState({
			key: event.target.value
		});
	}

	onScaleChange(event)
	{
		const semitones = this.state.semitones;

		semitones[ event.target.getAttribute("data-key") ] = event.target.checked;

		this.setState({
			semitones: semitones
		});
	}

	onTuningChange(event)
	{
		const tuning = this.state.tuning;

		tuning[ event.target.getAttribute("data-index") ] = event.target.value;

		this.setState({
			tuning: tuning
		});
	}

	onTuningPresetChange(event)
	{
		console.log(event.target.value);

		this.setState({
			tuning: JSON.parse(event.target.value)
		});
	}

	render()
	{
		return (
			<div className="app">
				<form>
					<div className="abstract-controls">
						<Scale 
							semitones={this.state.semitones}
							onChange={event => this.onScaleChange(event)}
							/>
						<Key 
							pitch={this.state.key}
							onChange={event => this.onKeyChange(event)}
							/>
					</div>
					<div className="instrument-controls">
						<Fretboard 
							tuning={this.state.tuning} 
							root={this.state.key} 
							semitones={this.state.semitones} 
							frets={this.state.frets}
							onTuningChange={event => this.onTuningChange(event)}
							onTuningPresetChange={event => this.onTuningPresetChange(event)}
							/>
					</div>
				</form>
			</div>
		);
	}
}

export default App;