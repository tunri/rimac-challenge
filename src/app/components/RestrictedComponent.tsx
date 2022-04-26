import { WithChildren } from "app/@types/with-children";

type RestrictComponentProps = WithChildren<{
	condition: boolean;
}>;

const RestrictComponent = ({
	condition,
	children,
}: RestrictComponentProps): JSX.Element | null => {
	if (!condition) return null;

	return <>{children}</>;
};

export default RestrictComponent;
