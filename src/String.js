import React from "react";

class String extends React.Component
{
	render()
	{
		const lis		= [];

		// TODO: Support maj/min, b/#, letters, degrees
		const captions	= [
			"1",
			"&#x266D;2",
			"2",
			"&#x266D;3",
			"3",
			"4",
			"&#x266D;5",
			"5",
			"&#x266D;6",
			"6",
			"&#x266D;7",
			"7"
		];

		for(let i = 0; i < this.props.frets; i++)
		{
			let pitch		= (this.props.pitch + i);
			let position	= (this.props.root + pitch) % 12;
			let caption		= captions[position];

			let button;

			if(this.props.semitones[position])
				button = (
					<button type="button">
						{caption}
					</button>
				);

			lis.push((
				<li className="fret" data-pitch={pitch} data-position={position}>
					{button}
				</li>
			));
		}

		return (
			<div className="string">
				<label data-letter-semitone={this.props.pitch % 12}>
					<input type="number" value={this.props.pitch}/>
				</label>

				<ol className="frets">
					{lis}
				</ol>
			</div>
		);
	}
}

export default String;