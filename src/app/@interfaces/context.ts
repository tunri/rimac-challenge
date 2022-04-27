import { IUser } from "./user";

export interface IState {
	user?: IUser | null;
	authenticated?: boolean;
	insureAmount?: number;
	monthlyAmount?: number;
}

type UpdateState = React.Dispatch<React.SetStateAction<IState>>;

export interface IAppContext {
	state: IState;
	updateState: UpdateState;
}
