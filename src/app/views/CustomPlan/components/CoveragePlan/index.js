import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ButtonRounded from "app/components/ButtonRounded/ButtonRounded";
import RestrictedComponent from "app/components/RestrictedComponent";

import InsureAmountIndicator from "./InsureAmountIndicator";
import MonthlyPayment from "./MonthlyPayment";
import CardLicense from "./CardLicense";
import CoverageList from "./CoverageList";
import { useState } from "react";


const CoveragePlan = ({ isDesktop }) => {

  const [insureAmount, setInsureAmount] = useState(14000);
  const [monthlyAmount, setMonthlyAmount] = useState(20);

  // !TODO: aplicar useMemo en InsureAmountIndicator y CoverageList si es posible

  return (
    <Box sx={{ py: 5 }}>
      <Box className="r-container">

        {/* Navigation */}
        <RestrictedComponent condition={isDesktop}>
          <Box sx={{ mb: 3 }}>
            <ButtonRounded>
              <ArrowBackIosIcon
                sx={{
                  marginLeft: "4px",
                }}
              />
            </ButtonRounded>
            <Typography variant="body2" component="span" sx={{ ml: 1, color: "#A3ABCC" }}>
              VOLVER
            </Typography>
          </Box>
        </RestrictedComponent>

        {/* Title Welcome */}
        <Box sx={{ mb: 3 }}>
          <RestrictedComponent condition={!isDesktop}>
            <Typography variant="h5" fontSize={28} sx={{ mb: 2 }}>
              Mira las coberturas
            </Typography>
          </RestrictedComponent>
          <RestrictedComponent condition={isDesktop}>
            <Typography variant="h3" fontSize={40} sx={{ mb: 2 }}>
              ¡Hola,{" "}
              <Typography
                component="span"
                variant="inherit"
                color="primary"
              >
                Jerson!
              </Typography>
            </Typography>
          </RestrictedComponent>
          <Typography variant="body1">
            Conoce las coberturas para tu plan
          </Typography>
        </Box>

        {/* Card and Amount Payment */}
        <Box sx={{ display: isDesktop ? 'flex' : "block" }}>
          <Box sx={{ width: isDesktop ? '60%' : "100%" }}>
            <CardLicense license="ABCDE" />
            <Box sx={{ my: 3 }}>
              <InsureAmountIndicator
                insureAmount={insureAmount}
                setInsureAmount={setInsureAmount}
              />
            </Box>

            {/* Coberturas */}
            <Box>
              <CoverageList
                monthlyAmount={monthlyAmount}
                setMonthlyAmount={setMonthlyAmount}
              />
            </Box>
          </Box>
          <RestrictedComponent condition={isDesktop}>
            <Box sx={{ flexGrow: 1, pl: 6 }}>
              <MonthlyPayment monthlyAmount={monthlyAmount} />
            </Box>
          </RestrictedComponent>
        </Box>
      </Box>
    </Box>
  )
};

export default CoveragePlan;