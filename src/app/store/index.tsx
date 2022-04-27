// context or redux
// algo basico con context

import { IAppContext, IState } from "app/@interfaces/context";
import { WithChildren } from "app/@types/with-children";
import { createContext, useState } from "react";

export const AppContext = createContext({} as IAppContext);

const initialState: IState = {
	user: null,
	authenticated: false,
	insureAmount: 16000,
	monthlyAmount: 20,
};

const AppProvider = ({ children }: WithChildren) => {
	const [state, updateState] = useState(initialState);

	return (
		<AppContext.Provider value={{ state, updateState }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
