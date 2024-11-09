import { useState, useEffect } from 'react';
import Calculator from '../components/Calculator';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/react';

export default function Home() {
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    const fetchCalculations = async () => {
      const response = await axios.get('/api/calculations');
      setCalculations(response.data);
    };

    fetchCalculations();
  }, []);

  const handleNewCalculation = (calculation) => {
    setCalculations([calculation, ...calculations].slice(0, 10));
  };

  const handleClearCalculations = () => {
    setCalculations([]);
  };

  return (
    <Flex direction="row" p={5}>
      <Box flex="1" p={5}>
        <Calculator onNewCalculation={handleNewCalculation} onClearCalculations={handleClearCalculations} />
      </Box>
      <Box flex="1" p={5}>
        <Sidebar calculations={calculations} />
      </Box>
    </Flex>
  );
}