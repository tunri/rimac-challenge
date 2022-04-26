import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginBanner from "./components/LoginBanner";
import LoginForm from "./components/LoginForm";
import useDesktop from "app/hooks/useDesktop";

const LoginPage = () => {
	const isDesktop = useDesktop();

	return (
		<Grid>
			<Box
				className="page-login"
				sx={{
					display: isDesktop ? "flex" : "block",
					height: isDesktop ? "100vh" : "auto",
				}}
			>
				<Box
					className="page-0 page-login__left"
					sx={{
						width: isDesktop ? `40%` : "100%", // random value
						height: isDesktop ? "100%" : "auto",
					}}
				>
					<LoginBanner isDesktop={isDesktop} />
				</Box>
				<Box
					className="page-login__right"
					sx={{ flexGrow: 1, height: isDesktop ? "100%" : "auto" }}
				>
					<LoginForm isDesktop={isDesktop} />
				</Box>
			</Box>
		</Grid>
	);
};

export default LoginPage;
