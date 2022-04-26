import Box from "@mui/material/Box";
import useDesktop from "app/hooks/useDesktop";
import NavSteps from "./components/NavSteps";
import CoveragePlan from "./components/CoveragePlan";

const CustomPlan = () => {
	const isDesktop = useDesktop();

	return (
		<Box
			className="page-plan"
			sx={{ display: isDesktop ? "flex" : "block" }}
		>
			<Box
				className="page-plan__left"
				sx={{ width: isDesktop ? `30%` : "100%" }}
			>
				<NavSteps isDesktop={isDesktop} />
			</Box>
			<Box className="page-plan__right" sx={{ flexGrow: 1 }}>
				<CoveragePlan isDesktop={isDesktop}/>
			</Box>
		</Box>
	);
};

export default CustomPlan;
