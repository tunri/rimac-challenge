import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BadgeRounded from 'app/components/BadgeRounded';


const AccordionItem = ({ icon, title, description, onToggleCoverage, price = 0 }) => {

  const [expand, setExpand] = useState(false);
  const [added, setAdded] = useState(false);

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const handleToggleCoverage = () => {
    onToggleCoverage(!added ? price : -price)
    setAdded(!added);
  }

  return (
    <Accordion expanded={expand} disableGutters sx={{ boxShadow: 'none' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" onClick={toggleAcordion} />}
        disableElevation
        sx={{ pb: 0 }}
      >
        <Box sx={{ mr: 2 }}>
          <img src={icon} alt={title} />
        </Box>
        <Box>
          <Typography fontSize={18} sx={{ mb: 2 }}>{title}</Typography>
          <Button variant="text" color="secondary" onClick={handleToggleCoverage}>
            <BadgeRounded color="secondary" sxx={{ mr: 1 }}>
              {added ? '-' : '+'}
            </BadgeRounded>
            <Typography variant="body2" color="secondary" component="span">
              {added ? 'QUITAR' : 'AGREGAR'}
            </Typography>
          </Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ pl: '80px', pb: 1 }}>
          <Typography>
            {description}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
};

export default AccordionItem;