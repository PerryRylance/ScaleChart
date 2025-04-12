import { useState } from "react";

import AppContext from "./AppContext";
import Chart from "./Chart";

import "../css/App.scss";

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

	return <div className="scale-chart app">
		<AppContext.Provider value={{state, setState}}>
			<Chart onStateChanged={onChartStateChange} />
		</AppContext.Provider>
	</div>;
}

export default App;