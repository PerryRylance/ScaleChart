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
		</AppContext.Provider>
	</div>;
}

export default App;