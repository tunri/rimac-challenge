import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const TabPanel = ({ children, value, index, ...other }) => {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;