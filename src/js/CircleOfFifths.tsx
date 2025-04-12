import { ChangeEventHandler } from "react";

import "../css/CircleOfFifths.scss";

interface ICircleOfFifthsProps
{
	pitch: number;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function CircleOfFifths({pitch, onChange}: ICircleOfFifthsProps)
{
	pitch %= 12;

	return (
		<fieldset className="circle-of-fifths key">
			<label>
				<input name="key" type="radio" value="0" checked={pitch === 0} onChange={onChange}/>
				<span>C</span>
			</label>
			<label>
				<input name="key" type="radio" value="7" checked={pitch === 7} onChange={onChange}/>
				<span>G</span>
			</label>
			<label>
				<input name="key" type="radio" value="2" checked={pitch === 2} onChange={onChange}/>
				<span>D</span>
			</label>
			<label>
				<input name="key" type="radio" value="9" checked={pitch === 9} onChange={onChange}/>
				<span>A</span>
			</label>
			<label>
				<input name="key" type="radio" value="4" checked={pitch === 4} onChange={onChange}/>
				<span>E</span>
			</label>
			<label>
				<input name="key" type="radio" value="11" checked={pitch === 11} onChange={onChange}/>
				<span>B</span>
			</label>
			<label>
				<input name="key" type="radio" value="6" checked={pitch === 6} onChange={onChange}/>
				<span>F♯</span>
			</label>
			<label>
				<input name="key" type="radio" value="1" checked={pitch === 1} onChange={onChange}/>
				<span>D♭</span>
			</label>
			<label>
				<input name="key" type="radio" value="8" checked={pitch === 8} onChange={onChange}/>
				<span>A♭</span>
			</label>
			<label>
				<input name="key" type="radio" value="3" checked={pitch === 3} onChange={onChange}/>
				<span>E♭</span>
			</label>
			<label>
				<input name="key" type="radio" value="10" checked={pitch === 10} onChange={onChange}/>
				<span>B♭</span>
			</label>
			<label>
				<input name="key" type="radio" value="5" checked={pitch === 5} onChange={onChange}/>
				<span>F</span>
			</label>
		</fieldset>
	);
}