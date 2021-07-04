import React from 'react';
import String from "./String";

class Fretboard extends React.Component
{
	render()
	{
		const inlays = [];
		const inlayPositions = [0, 3, 5, 7, 9];

		const strings = [];
		
		let dot, className;
		let i = 0;

		for(i = 0; i < this.props.frets; i++)
		{
			if(inlayPositions.indexOf(i % 12) > -1)
			{
				className = (i % 12 === 0 ? "double dot" : "single dot");
				dot = (<div className={className}></div>);
			}
			else
				dot = null;

			inlays.push((
				<li data-fret={i}>{dot}</li>
			));
		}

		for(i = 0; i < this.props.tuning.length; i++)
			strings.push((
				<li>
					<String frets={this.props.frets} pitch={this.props.tuning[i]} root={this.props.root} semitones={this.props.semitones}/>
				</li>
			));

		// TODO: Add inlays. They need to be flush with the left of the open fret though.

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