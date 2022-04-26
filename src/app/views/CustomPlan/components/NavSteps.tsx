import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonRounded from "app/components/ButtonRounded/ButtonRounded";
import RestrictedComponent from "app/components/RestrictedComponent";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ItemStep from "./ItemStep";

interface ResponsiveProps {
	isDesktop: boolean;
}

const NavSteps = ({ isDesktop }: ResponsiveProps) => {
	return (
		<>
			<RestrictedComponent condition={!isDesktop}>
				<Box
					height={isDesktop ? "auto" : "48px"}
					sx={{
						backgroundColor: isDesktop ? "transparent" : "#fff",
						borderBottom: (t) =>
							isDesktop
								? "none"
								: `1px solid ${t.palette.divider}`,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Box className="r-container">
						<Box className="items-center">
							<ButtonRounded>
								<ArrowBackIosIcon
									sx={{
										marginLeft: "4px",
									}}
								/>
							</ButtonRounded>
							<Typography
								sx={{ mx: 2 }}
								component="h6"
								variant="body2"
							>
								PASO 2 DE 2
							</Typography>
							<Box
								height={6}
								sx={{
									flexGrow: 1,
									backgroundColor: (theme) =>
										theme.palette.secondary.main,
									borderRadius: 3,
								}}
							></Box>
						</Box>
					</Box>
				</Box>
			</RestrictedComponent>
			<RestrictedComponent condition={isDesktop}>
				<Box sx={{ py: 5, backgroundColor: "#F7F8FC", height: "100%" }}>
					<Box sx={{ maxWidth: "224px", mx: "auto" }}>
						<ItemStep number={1} text="Datos" sx={{ mb: 3 }} />
						<ItemStep number={2} text="Arma tu plan" />
					</Box>
				</Box>
			</RestrictedComponent>
		</>
	);
};

export default NavSteps;
