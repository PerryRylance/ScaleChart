import React from "react";

class Scale extends React.Component
{
	render()
	{
		const semitones = this.props.semitones;

		const labels = [
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

		const lis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => 
			<li key={i}>
				<label>
					<input 
						type="checkbox" 
						checked={semitones[i]} 
						onChange={event => this.props.onChange(event)}
						data-key={i}
						/>
					{labels[i]}
				</label>
			</li>
		);

		return (
			<fieldset className="scale">
				<ol className="semitones">
					{lis}
				</ol>
			</fieldset>
		);
	}
}

export default Scale;