import { createTheme } from "@mui/material/styles";

const defaultFontConfig = {
	fontFamily: "Lato",
};

// en otro archivo dts
declare module "@mui/material/styles" {
	interface Palette {
		neutral: Palette["primary"];
	}

	interface PaletteOptions {
		neutral?: PaletteOptions["primary"];
	}
}

// Update the TextField's
declare module "@mui/material/TextField" {
	interface TextFieldPropsColorOverrides {
		neutral: true;
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: "#EF3340",
		},
		secondary: {
			main: "#6F7DFF",
		},
		success: {
			main: "#43B748",
		},
		divider: "#E4E8F7",
		neutral: {
			main: "#676F8F",
		},
	},
	typography: {
		allVariants: {
			color: "#494F66",
		},
		h1: { ...defaultFontConfig /* individual config key:value */ },
		h2: { ...defaultFontConfig /* individual config key:value */ },
		h3: { ...defaultFontConfig /* individual config key:value */ },
		h4: { ...defaultFontConfig /* individual config key:value */ },
		h5: { ...defaultFontConfig /* individual config key:value */ },
		h6: { ...defaultFontConfig /* individual config key:value */ },
	},
});

export default theme;
