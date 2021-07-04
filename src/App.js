import React from 'react';
import Scale from './Scale';
import Key from './Key';
import Fretboard from './Fretboard';

class App extends React.Component
{
	render() {

		const semitones	= [true, false, true, false, true, true, false, true, false, true, false, true];
		const key		= 60;
		const tuning	= [64, 59, 55, 50, 45, 40];
		const frets		= 13; // NB: Includes the open fret

		return (
			<div className="app">
				<form>
					<Scale semitones={semitones}/>
					<Key pitch={key}/>
					<Fretboard tuning={tuning} root={key} semitones={semitones} frets={frets}/>
				</form>
			</div>
		);
	}
}

export default App;