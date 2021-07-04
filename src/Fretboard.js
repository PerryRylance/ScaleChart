import React from 'react';
import String from "./String";

class Fretboard extends React.Component
{
	render()
	{
		let i = 0;
		const numbers = [];

		for(i = 0; i < this.props.tuning.length; i++)
			numbers.push(i);

		const strings = numbers.map((i) => 
			<li>
				<String 
					key={i}
					frets={this.props.frets} 
					pitch={this.props.tuning[i]} 
					root={this.props.root} 
					semitones={this.props.semitones}
					index={i}
					onTuningChange={this.props.onTuningChange}
					/>
			</li>
		);

		return (
			<fieldset className="fretboard">
				<ol className="strings">
					{strings}
				</ol>
			</fieldset>
		);
	}
}

export default Fretboard;