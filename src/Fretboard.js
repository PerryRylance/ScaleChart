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
				<div>
					<select onChange={this.props.onTuningPresetChange}>
						<optgroup label="Guitar">
							<option value="[64, 59, 55, 50, 45, 40]">E Standard</option>
						</optgroup>
						<optgroup label="Mandolin">
							<option value="[76, 69, 62, 55]">G Standard</option>
						</optgroup>
					</select>
				</div>
			</fieldset>
		);
	}
}

export default Fretboard;