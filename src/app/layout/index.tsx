import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import HeaderApp from "./HeaderApp";

const LayoutPage = () => {
	const heightHeader = 64;

	return (
		<>
			<HeaderApp height={heightHeader} />
			<Box component="main">
				<Outlet />
			</Box>
		</>
	);
};

export default LayoutPage;
