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
			key: parseInt(event.target.value)
		});
	}

	onScaleChange(event)
	{
		const semitones = this.state.semitones;

		semitones[ parseInt(event.target.getAttribute("data-key")) ] = event.target.checked;

		this.setState({
			semitones: semitones
		});
	}

	onTuningChange(event)
	{
		const tuning = this.state.tuning;

		tuning[ parseInt(event.target.getAttribute("data-index")) ] = parseInt(event.target.value);

		this.setState({
			tuning: tuning
		});
	}

	onTuningPresetChange(event)
	{
		this.setState({
			tuning: JSON.parse(event.target.value)
		});
	}

	onScalePresetChange(event)
	{
		this.setState({
			semitones: JSON.parse(event.target.value)
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
							onScalePresetChange={event => this.onScalePresetChange(event)}
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