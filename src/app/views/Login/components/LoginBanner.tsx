// components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RestrictedComponent from "app/components/RestrictedComponent";

// assets
import UserAppImageMobile from "assets/images/user-with-app.png";
import UserAppImageDesktop from "assets/images/user-app-desktop.svg";

interface LoginBannerProps {
	isDesktop: boolean;
}

const LoginBanner = ({ isDesktop }: LoginBannerProps) => {
	return (
		<div className="r-container">
			<Box className="page-login__wrap-banner">
				<Box sx={{ maxWidth: isDesktop ? "320px" : "100%" }}>
					<RestrictedComponent condition={isDesktop}>
						<img
							src={UserAppImageDesktop}
							alt="application"
							className="page-login__image"
						/>
					</RestrictedComponent>
					<Box sx={{ flexGrow: 1, mt: isDesktop ? 3 : 0 }}>
						<Typography
							variant="subtitle1"
							component="h6"
							sx={{ mb: 1 }}
						>
							Nuevo!
						</Typography>
						<Typography
							variant="h4"
							fontSize={isDesktop ? '36px' : '28px'}
							sx={{ mb: 2 }}
						>
							Seguro <span>vehicular</span>{" "}
							<Typography
								component="span"
								variant="inherit"
								color="primary"
							>
								Tracking
							</Typography>
						</Typography>
						<Typography
							variant="body2"
							fontSize={isDesktop ? '16px' : "inherit"}
							sx={{ color: "#676F8F" }}
						>
							Cuentanos donde le haras seguimiento a tu seguro
						</Typography>
					</Box>
				</Box>
			</Box>
			<RestrictedComponent condition={!isDesktop}>
				<img
					src={UserAppImageMobile}
					alt="application"
					className="page-login__image"
				/>
			</RestrictedComponent>
		</div>
	);
};

export default LoginBanner;
