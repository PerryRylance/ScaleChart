import { useState } from "react";

import AppContext from "./AppContext";
import Chart from "./Chart";

export interface IAppState
{
	cursor: number | null;
}

function App()
{
	const [state, setState] = useState<IAppState>({
		cursor: null
	});

	const onChartStateChange = () => {
		// TODO: Reimplement URL state
	};

	return <div className="app">
		<AppContext.Provider value={{state, setState}}>
			<Chart onStateChanged={onChartStateChange} />
			<Chart onStateChanged={onChartStateChange} />
		</AppContext.Provider>
	</div>;
}

/*class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			semitones:	[true, false, true, false, true, true, false, true, false, true, false, true],
			key:		0,
			tuning:		[64, 59, 55, 50, 45, 40],
			frets:		13
		};

		const params	= new URLSearchParams(window.location.search);

		if(params.has("state"))
			this.state	= JSON.parse( Base64.decode(params.get("state")) );
	}

	

	componentDidUpdate()
	{
		const params	= new URLSearchParams(window.location.search);
		const data		= Base64.encode(JSON.stringify(this.state));
	
		params.set("state", data);

		window.history.replaceState(this.state, window.title, ["?" + params.toString()]);
	}

	render()
	{
		return (
			<div className="app">
				
			</div>
		);
	}
}*/

export default App;