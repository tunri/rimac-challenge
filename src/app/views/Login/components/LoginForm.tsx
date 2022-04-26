import * as yup from "yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/material/styles";

import { IFormLogin } from "app/@interfaces/form-login";

import documents from "app/data-mock/documents";
import { rgxDni } from "app/utils/patternsRegex";
import { GetUserService } from "app/services/Auth.service";
import { IUser } from "app/@interfaces/user";
import { AppContext } from "app/store";
import { IState } from "app/@interfaces/context";

// ejemplo usando yup
const schemaLogin = yup
	.object({
		typeDocument: yup.number(),
		phone: yup
			.string()
			.required("Campo requerido")
			.matches(/\d+/, "No es celular"),
		numDocument: yup
			.string()
			.required("Campo requerido")
			.matches(rgxDni, "No es dni"),
		license: yup.string().required("Campo requerido"),
	})
	.required();

const LinkStyled = styled(Link)`
	color: #676f8f;
	text-decoration-color: #676f8f;
`;

interface LoginFormProps {
	isDesktop: boolean;
}

const LoginForm = ({ isDesktop }: LoginFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLogin>({
		resolver: yupResolver(schemaLogin),
	});

	const navigation = useNavigate();
	const { updateState } = useContext(AppContext);

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: IFormLogin) => {
		try {
			setLoading(true);
			const response = await GetUserService(1);
			const {
				data: { id, name, username },
			} = response;
			const user: IUser = {
				id,
				firstName: username,
				lastName: name,
				license: data.license,
			};
			const state: IState = { user, authenticated: true };
			updateState(state);
			navigation("plan");
		} catch (error) {
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={!isDesktop ? "r-container" : ""}>
			<Box
				sx={{
					mt: isDesktop ? 0 : 15,
					maxWidth: isDesktop ? "360px" : "100%",
					mx: isDesktop ? "auto" : "inherit",
				}}
				component="form"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<Typography
					variant="h5"
					fontSize={isDesktop ? 28 : 24}
					sx={{ mb: 1 }}
				>
					Dejanos tus datos
				</Typography>
				<Box sx={{ display: "flex", alignItems: "baseline" }}>
					<TextField
						id="typeDocument"
						select
						label="Tipo Doc"
						sx={{ width: 130 }}
						defaultValue={1}
						{...register("typeDocument")}
					>
						{documents.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.text}
							</MenuItem>
						))}
					</TextField>
					<TextField
						sx={{ flexGrow: 1 }}
						margin="normal"
						required
						fullWidth
						id="numDocument"
						label="Nro de Doc"
						autoComplete="numDocument"
						autoFocus
						error={Boolean(errors.numDocument?.message)}
						helperText={errors.numDocument?.message}
						color="neutral"
						inputProps={{ maxLength: 8 }}
						{...register("numDocument")}
					/>
				</Box>
				<TextField
					margin="normal"
					required
					fullWidth
					id="phone"
					label="Celular"
					autoComplete="phone"
					autoFocus
					error={Boolean(errors.phone?.message)}
					helperText={errors.phone?.message}
					color="neutral"
					inputProps={{ maxLength: 9 }}
					{...register("phone")}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="license"
					label="Placa"
					autoComplete="license"
					autoFocus
					error={Boolean(errors.license?.message)}
					helperText={errors.license?.message}
					color="neutral"
					{...register("license")}
				/>
				<Box
					sx={{
						mt: 3,
						mb: 4,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Checkbox
						sx={{ p: 0, mr: 1 }}
						value="terminus"
						color="success"
					/>
					<Typography
						variant="body2"
						fontSize={12}
						sx={{ color: "#A3ABCC" }}
					>
						Acepto la{" "}
						<LinkStyled>
							Política de Protecciòn de Datos Personales
						</LinkStyled>{" "}
						y los <LinkStyled>Términos y Condiciones.</LinkStyled>
					</Typography>
				</Box>
				<LoadingButton
					type="submit"
					loading={loading}
					color="primary"
					variant="contained"
					size="large"
					fullWidth
					disableElevation
					sx={{ height: 56 }}
				>
					cotizalo
				</LoadingButton>
			</Box>
		</div>
	);
};

export default LoginForm;
