import React from 'react';
import String from "./String";

class Fretboard extends React.Component
{
	render()
	{
		const strings = [];
		
		let i = 0;

		for(i = 0; i < this.props.tuning.length; i++)
			strings.push((
				<li>
					<String frets={this.props.frets} pitch={this.props.tuning[i]} root={this.props.root} semitones={this.props.semitones}/>
				</li>
			));

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