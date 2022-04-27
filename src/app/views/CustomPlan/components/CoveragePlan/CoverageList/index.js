import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { OPTIONS_PROTECT_CAR } from 'app/data-mock/coverages';

import TabPanel from 'app/components/TabPanel';
import AccordionItem from './AccordionItem';

const a11yProps = (index) => ({ id: `tab-${index}`, 'aria-controls': `tabpanel-${index}` });


// se peude usar useCallback en las funciones, addItem y remove Item
const getIndexItem = (items, id) => {
  return items.findIndex(i => i.id === id);
}

const MAX_TOTAL = 16000;
const itemChoque = OPTIONS_PROTECT_CAR[1];

const CoverageList = ({
  monthlyAmount,
  setMonthlyAmount,
  insureAmount,
}) => {
  const [valueTab, setValueTab] = useState(0);
  const [selectedCoverage, setSelectedCoverage] = useState([]);

  const handleChange = (ev, newValue) => {
    setValueTab(newValue);
  };

  const removeItem = (selected) => {
    setSelectedCoverage(selectedCoverage.filter(i => i.id !== selected.id));
    setMonthlyAmount(monthlyAmount - selected.price);
  }

  const addItem = (selected) => {
    setSelectedCoverage([...selectedCoverage, selected]);
    setMonthlyAmount(monthlyAmount + selected.price);
  }


  useEffect(() => {
    const removeChoque = () => {
      if (insureAmount >= MAX_TOTAL) {
        const alreadyChoque = getIndexItem(selectedCoverage, itemChoque.id);
        if (alreadyChoque > -1) {
          removeItem(itemChoque)
        }
      }
    }

    removeChoque();
    // solo para el reto, se puede refactorizar y mejorar con useMemo y useCallback y React.Memo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insureAmount]);

  const handleToggleCoverage = (selected) => {

    const idx = getIndexItem(selectedCoverage, selected.id);

    if (idx > -1) {
      removeItem(selected);
    } else if (selected.id !== itemChoque.id || insureAmount < MAX_TOTAL) {
      addItem(selected);
    }
  }

  console.log('coverage list ');

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
        {OPTIONS_PROTECT_CAR.map(coverage => (
          <AccordionItem
            key={coverage.id}
            item={coverage}
            isAdded={getIndexItem(selectedCoverage, coverage.id) > -1}
            onToggleCoverage={handleToggleCoverage}
          />
        ))}
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