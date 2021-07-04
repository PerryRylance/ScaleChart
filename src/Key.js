import React from "react";

class Key extends React.Component
{
	render()
	{
		// TODO: Key is an abstract concept of pitch, so I'm not sure if "key" is an appropriate property name here.

		return (
			<fieldset className="key">
				<input type="number" value={this.props.pitch} step="7" onChange={this.props.onChange}/>
			</fieldset>
		);
	}
}

export default Key;