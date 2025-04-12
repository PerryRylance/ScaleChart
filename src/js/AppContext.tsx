import { createContext, useContext } from "react";
import { IAppState } from "./App";

interface IAppContext {
	state: IAppState;
	setState: Function;
}

const AppContext = createContext<IAppContext>({
	state: {
		cursor: null
	},
	setState: () => {
		throw new Error("Invalid call");
	}
});

const useAppContext = () => { return useContext(AppContext) };

export default AppContext;

export { useAppContext };