import { useState } from 'react';
import axios from 'axios';
import { evaluate } from 'mathjs';
import { Box, Input, Button, Text, VStack } from '@chakra-ui/react';

const Calculator = ({ onNewCalculation, onClearCalculations }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');

  const handleCalculate = () => {
    try {
      const res = evaluate(expression);
      setResult(res);
      return res;
    } catch (error) {
      console.error('Invalid expression');
      return null;
    }
  };

  const handleSave = async () => {
    const calculatedResult = handleCalculate();

    if (calculatedResult === null) {
      console.error('Cannot save invalid calculation');
      return;
    }

    if (name.trim() === '') {
      console.error('Name cannot be empty');
      return;
    }

    try {
      const response = await axios.post('/api/calculations', {
        expression,
        result: calculatedResult,
        name,
      });
      onNewCalculation(response.data);
      setName('');
    } catch (error) {
      console.error('Error saving calculation');
    }
  };

  const handleClear = async () => {
    try {
      await axios.delete('/api/calculations/clear');
      onClearCalculations();
    } catch (error) {
      console.error('Error clearing calculations');
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Enter expression"
        size="md"
      />
      <Button onClick={handleCalculate} colorScheme="teal">Calculate</Button>
      {result !== null && <Text>Result: {result}</Text>}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        size="md"
      />
      <Button onClick={handleSave} colorScheme="blue">Save</Button>
      <Button onClick={handleClear} colorScheme="red">Clear All</Button>
    </VStack>
  );
};

export default Calculator;