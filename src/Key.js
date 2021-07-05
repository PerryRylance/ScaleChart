import React from "react";

class Key extends React.Component
{
	render()
	{
		// TODO: Key is an abstract concept of pitch, so I'm not sure if "key" is an appropriate property name here.

		return (
			<fieldset className="key">

				<label>
					<input name="key" type="radio" value="0" checked={this.props.pitch == "0"} onChange={this.props.onChange}/>
					<span>C</span>
				</label>
				<label>
					<input name="key" type="radio" value="7" checked={this.props.pitch == "7"} onChange={this.props.onChange}/>
					<span>G</span>
				</label>
				<label>
					<input name="key" type="radio" value="2" checked={this.props.pitch == "2"} onChange={this.props.onChange}/>
					<span>D</span>
				</label>
				<label>
					<input name="key" type="radio" value="9" checked={this.props.pitch == "9"} onChange={this.props.onChange}/>
					<span>A</span>
				</label>
				<label>
					<input name="key" type="radio" value="4" checked={this.props.pitch == "4"} onChange={this.props.onChange}/>
					<span>E</span>
				</label>
				<label>
					<input name="key" type="radio" value="11" checked={this.props.pitch == "11"} onChange={this.props.onChange}/>
					<span>B</span>
				</label>
				<label>
					<input name="key" type="radio" value="6" checked={this.props.pitch == "6"} onChange={this.props.onChange}/>
					<span>F♯</span>
				</label>
				<label>
					<input name="key" type="radio" value="1" checked={this.props.pitch == "1"} onChange={this.props.onChange}/>
					<span>D♭</span>
				</label>
				<label>
					<input name="key" type="radio" value="8" checked={this.props.pitch == "8"} onChange={this.props.onChange}/>
					<span>A♭</span>
				</label>
				<label>
					<input name="key" type="radio" value="3" checked={this.props.pitch == "3"} onChange={this.props.onChange}/>
					<span>E♭</span>
				</label>
				<label>
					<input name="key" type="radio" value="10" checked={this.props.pitch == "10"} onChange={this.props.onChange}/>
					<span>B♭</span>
				</label>
				<label>
					<input name="key" type="radio" value="5" checked={this.props.pitch == "5"} onChange={this.props.onChange}/>
					<span>F</span>
				</label>

				{
				/*
				<label data-letter-semitone={this.props.pitch % 12}>
					<input type="number" value={this.props.pitch} step="7" onChange={this.props.onChange}/>
				</label>
				*/
				}
			</fieldset>
		);
	}
}

export default Key;