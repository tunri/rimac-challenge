import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BadgeRounded from 'app/components/BadgeRounded';

const AccordionItem = ({
  item,
  isAdded = false,
  onToggleCoverage,
}) => {
  const { title, description, price, image, id } = item;
  const [expand, setExpand] = useState(false);

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const handleToggleCoverage = () => {
    onToggleCoverage({
      id, title: title, price
    });
  }

  return (
    <Accordion expanded={expand} disableGutters sx={{ boxShadow: 'none' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" onClick={toggleAcordion} />}
        sx={{ pb: 0 }}
      >
        <Box sx={{ mr: 2 }}>
          <img src={image} alt={title} />
        </Box>
        <Box>
          <Typography fontSize={18} sx={{ mb: 2 }}>{title}</Typography>
          <Button variant="text" color="secondary" onClick={handleToggleCoverage}>
            <BadgeRounded color="secondary" sxx={{ mr: 1 }}>
              {isAdded ? '-' : '+'}
            </BadgeRounded>
            <Typography variant="body2" color="secondary" component="span">
              {isAdded ? 'QUITAR' : 'AGREGAR'}
            </Typography>
          </Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ pl: '80px', pb: 1 }}>
          <Typography component="p" variant="body1">
            {description}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
};

export default AccordionItem;