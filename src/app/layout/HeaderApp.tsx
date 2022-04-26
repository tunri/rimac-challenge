import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallIcon from "@mui/icons-material/Call";
import logoRimac from "assets/images/logo-color-rimac.svg";
import { useLocation } from "react-router-dom";
import useDesktop from "app/hooks/useDesktop";

const HeaderApp = ({ height = 64 }: { height?: number }) => {
	
	const isDesktop = useDesktop();

	const { pathname } = useLocation();
	const isRoot = pathname === "/";

	return (
		<AppBar
			position={isRoot && isDesktop ? "absolute" : "static"}
			color="default"
			elevation={0}
			sx={{
				backgroundColor: "transparent",
				height: `${height}px`,
				lineHeight: `${height}px`,
				borderBottom: (t) =>
					isRoot ? "none" : `1px solid ${t.palette.divider}`,
			}}
		>
			<div className="r-container">
				<Toolbar sx={{ flexWrap: "wrap", px: "0 !important" }}>
					<Box sx={{ flexGrow: 1 }}>
						<img src={logoRimac} alt="Rimac" />
					</Box>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Typography
							variant="subtitle1"
							sx={{ mr: 2, display: isDesktop ? "block" : "none" }}
						>
							¿Tienes alguna duda?
						</Typography>

						<Box sx={{ display: "flex", alignItems: "center" }}>
							<CallIcon
								color="secondary"
								sx={{ lineHeight: 0, mr: "8px" }}
							/>
							<Typography
								variant="subtitle1"
								component="span"
								color="secondary"
							>
								{isDesktop ? "(01) 411 6001" : "Llámanos"}
							</Typography>
						</Box>
					</Box>
				</Toolbar>
			</div>
		</AppBar>
	);
};

export default HeaderApp;
