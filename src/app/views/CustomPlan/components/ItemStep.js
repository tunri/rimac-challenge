import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonRounded from "app/components/ButtonRounded/ButtonRounded";
const ItemStep = ({ number, text, ...restPropsBox }) => {
  return (
    <Box className="items-center" {...restPropsBox}>
      <ButtonRounded> {number} </ButtonRounded>
      <Typography
        sx={{ mx: 2 }}
        component="h6"
        variant="body2"
      >
        {text}
      </Typography>
    </Box>
  )
};

export default ItemStep;