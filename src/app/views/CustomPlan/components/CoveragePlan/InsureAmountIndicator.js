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
  isDesktop,
}) => {


  const handleIncrease = () => {
    if (insureAmount < maxAmount)
      setInsureAmount(insureAmount + rate);
  }

  const handleDecrease = () => {
    if (insureAmount > minAmount)
      setInsureAmount(insureAmount - rate);
  }

  const width = isDesktop ? '50%' : "100%";
  const styleBtnControl = { height: "100%", width: 48, minWidth: 48 };
  const styleCard = { height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" };
  const colorTextLimit = { color: "#676F8F" };

  return (
    <Box sx={{ display: isDesktop ? 'flex' : 'block', my: isDesktop ? 1 : 0 }}>
      <Box sx={{ pr: isDesktop ? 1 : 0, width }}>
        <Typography variant="body1" sx={{ mb: 1 }}> Indica la suma asegurada</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={colorTextLimit}>MIN $12,500</Typography>
          <Typography variant="body2" sx={colorTextLimit}>|</Typography>
          <Typography variant="body2" sx={colorTextLimit}>MAX 16,500</Typography>
        </Box>
      </Box>
      <Box sx={{ my: isDesktop ? 0 : 3, pl: isDesktop ? 1 : 0, width }}>
        <Card variant="outlined" sx={styleCard}>
          <Button
            sx={styleBtnControl}
            color="secondary"
            onClick={handleDecrease}
          >
            -
          </Button>
          <Box>$ {numberWithCommas(insureAmount)}</Box>
          <Button
            sx={styleBtnControl}
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