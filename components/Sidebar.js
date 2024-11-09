import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Input, List, ListItem, VStack } from '@chakra-ui/react';

const Sidebar = ({ calculations }) => {
  const [search, setSearch] = useState('');
  const [filteredCalculations, setFilteredCalculations] = useState(calculations);

  useEffect(() => {
    const fetchCalculations = async () => {
      const response = await axios.get('/api/calculations', {
        params: { search },
      });
      setFilteredCalculations(response.data);
    };

    fetchCalculations();
  }, [search]);

  useEffect(() => {
    setFilteredCalculations(calculations.slice(0, 10));
  }, [calculations]);

  return (
    <VStack spacing={4} align="stretch">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
        size="md"
      />
      <List spacing={3}>
        {filteredCalculations.map((calc) => (
          <ListItem key={calc.id}>
            {calc.expression} = {calc.result} (Name: {calc.name})
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Sidebar;