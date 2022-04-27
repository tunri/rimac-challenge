import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RestrictedComponent from "app/components/RestrictedComponent";

import InsureAmountIndicator from "./InsureAmountIndicator";
import MonthlyPayment from "./MonthlyPayment";
import CardLicense from "./CardLicense";
import CoverageList from "./CoverageList";
import BadgeRounded from "app/components/BadgeRounded";
import { Link } from "react-router-dom";
import useStore from "app/hooks/useStore";

const CoveragePlan = ({ isDesktop }) => {

  const [state, updateState] = useStore();

  const updateStore = (partialState) => {
    updateState({ ...state, ...partialState });
  }

  return (
    <Box sx={{ py: 5 }}>
      <Box className="r-container">

        {/* Navigation */}
        <RestrictedComponent condition={isDesktop}>
          <Box sx={{ mb: 3 }}>
            <Link to="/" className="underline-none">
              <BadgeRounded color="#A3ABCC">
                <ArrowBackIosIcon
                  sx={{
                    marginLeft: "4px",
                    fontSize: 10
                  }}
                />
              </BadgeRounded>
              <Typography variant="body2" component="span" sx={{ ml: 1, color: "#A3ABCC" }}>
                VOLVER
              </Typography>
            </Link>
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
                {state.user && state.user.firstName}
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
            <CardLicense license={state.user ? state.user.license : ""} />
            <Box sx={{ my: 3 }}>
              <InsureAmountIndicator
                insureAmount={state.insureAmount}
                setInsureAmount={(amount) => updateStore({ insureAmount: amount })}
                isDesktop={isDesktop}
              />
            </Box>

            {/* Coberturas */}
            <Box>
              <CoverageList
                monthlyAmount={state.monthlyAmount}
                setMonthlyAmount={(amount) => updateStore({ monthlyAmount: amount })}
                insureAmount={state.insureAmount}
              />
            </Box>
          </Box>
          <RestrictedComponent condition={isDesktop}>
            <Box sx={{ flexGrow: 1, pl: 6 }}>
              <MonthlyPayment monthlyAmount={state.monthlyAmount} />
            </Box>
          </RestrictedComponent>
        </Box>
      </Box>
    </Box>
  )
};

export default CoveragePlan;