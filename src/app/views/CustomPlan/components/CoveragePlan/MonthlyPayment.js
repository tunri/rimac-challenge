import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ItemBenefit from "./ItemBenefit";
import numberWithCommas from "app/utils/numberWithCommas";

const MonthlyPayment = ({ monthlyAmount = 0}) => {
  return (
    <Box>
      <Typography variant="caption" fontWeight={600}>
        MONTO
      </Typography>
      <Typography fontSize={28}>
        $ { numberWithCommas(monthlyAmount) }
      </Typography>
      <Typography variant="body2">
        mensuales
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6">
        El precio incluye:
      </Typography>
      <List dense sx={{ mb: 3 }}>
        <ItemBenefit text="Llanta de respuesto" />
        <ItemBenefit text="Analisis de motor" />
        <ItemBenefit text="Aros gratis" />
      </List>
      <LoadingButton
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        disableElevation
        sx={{ height: 56 }}
      >
        Lo quiero
      </LoadingButton>
    </Box>
  )
}

export default MonthlyPayment;