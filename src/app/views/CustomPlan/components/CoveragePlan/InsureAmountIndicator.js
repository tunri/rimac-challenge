import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import numberWithCommas from "app/utils/numberWithCommas";

const InsureAmountIndicator = ({
  insureAmount,
  setInsureAmount,
  rate = 100,
  maxAmount = 16500,
  minAmount = 12500,
}) => {


  const handleIncrease = () => {
    if (insureAmount < maxAmount)
      setInsureAmount(insureAmount + rate);
  }

  const handleDecrease = () => {
    if (insureAmount > minAmount)
      setInsureAmount(insureAmount - rate);
  }

  return (
    <Box>
      <Box>
        <Typography variant="body1" sx={{ mb: 1 }}> Indica la suma asegurada</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "#676F8F" }}>MIN $12,500</Typography>
          <Typography variant="body2" sx={{ color: "#676F8F" }}>|</Typography>
          <Typography variant="body2" sx={{ color: "#676F8F" }}>MAX 16,500</Typography>
        </Box>
      </Box>
      <Box sx={{ my: 3 }}>
        <Card variant="outlined" sx={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Button
            sx={{ height: "100%" }}
            color="secondary"
            onClick={handleDecrease}
          >
            -
          </Button>
          <Box>$ {numberWithCommas(insureAmount)}</Box>
          <Button
            sx={{ height: "100%" }}
            color="secondary"
            onClick={handleIncrease}
          >
            +
          </Button>
        </Card>
      </Box>
    </Box>
  )
}

export default InsureAmountIndicator;