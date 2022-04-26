import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from 'app/components/TabPanel';
import AccordionItem from './AccordionItem';

import StolenTireIcon from 'assets/images/llanta-robada.svg';

const a11yProps = (index) => ({ id: `tab-${index}`, 'aria-controls': `tabpanel-${index}` });

const CoverageList = ({ monthlyAmount, setMonthlyAmount }) => {
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (ev, newValue) => {
    setValueTab(newValue);
  };

  const handleToggleCoverage = (quantity) => {
    setMonthlyAmount(monthlyAmount + quantity)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueTab} onChange={handleChange} className="tabs-mobile">
          <Tab label={<span>Protege a <br />tu auto</span>} {...a11yProps(0)} />
          <Tab label={<span>Protege a los <br />que te rodean</span>} {...a11yProps(1)} />
          <Tab label={<span>mejora tu <br />plan</span>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={valueTab} index={0}>
        <AccordionItem
          icon={StolenTireIcon}
          title="abcder"
          description="lorem lorem lolewrwerwer"
          price={15}
          onToggleCoverage={handleToggleCoverage}
        />
        <AccordionItem
          icon={StolenTireIcon}
          title="abcder"
          description="lorem lorem lolewrwerwer"
          price={20}
          onToggleCoverage={handleToggleCoverage}
        />

        <AccordionItem
          icon={StolenTireIcon}
          title="abcder"
          description="lorem lorem lolewrwerwer"
          price={50}
          onToggleCoverage={handleToggleCoverage}
        />
      </TabPanel>
      <TabPanel value={valueTab} index={1}>
        Protege a los que te rodean
      </TabPanel>
      <TabPanel value={valueTab} index={2}>
        mejora tu plan
      </TabPanel>
    </Box>
  );
}

export default CoverageList;