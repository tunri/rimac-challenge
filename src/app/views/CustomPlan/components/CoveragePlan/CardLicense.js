import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserHappyImage from 'assets/images/user-happy.png';
const CardLicense = ({ license = "" }) => {
	return (
		<Card
			sx={{
				p: 3,
				pr: 15,
				position: "relative",
				height: 170,
				overflow: "visible",
			}}
			variant="outlined"
		>
			<Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
				<Box sx={{ maxWidth: 200 }}>
					<Typography variant="body1" sx={{ color: "#A3ABCC" }}>
						Placa {license}
					</Typography>
					<Typography variant="h5">Wolkswagen 2019 Golf</Typography>
					<Box
						sx={{
							position: "absolute",
							bottom: 0,
							right: 0,
							lineHeight: 0,
						}}
					>
						<img src={UserHappyImage} alt="happy user" />
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export default CardLicense;
