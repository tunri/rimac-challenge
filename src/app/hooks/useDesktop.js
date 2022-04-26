import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useDesktop = (breakpoint = "md") => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(breakpoint));

  return isDesktop;
}

export default useDesktop;