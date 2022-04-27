import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BadgeRounded from "app/components/BadgeRounded";
const ItemStep = ({ number, text, active = false, ...restPropsBox }) => {

  const color = active ? '#fff' : '#C5CBE0'
  const colorLabel = active ? '#494F66' : '#A3ABCC';

  return (
    <Box className="items-center" {...restPropsBox}>
      <BadgeRounded sxx={{
        backgroundColor: active ? '#6F7DFF' : '#fff',
        color
      }}>
        <Typography fontSize={12} component="span" sx={{ color }}>
          {number}
        </Typography>
      </BadgeRounded>
      <Typography
        sx={{ mx: 2, color: colorLabel }}
        component="h6"
        variant="body2"
      >
        {text}
      </Typography>
    </Box>
  )
};

export default ItemStep;