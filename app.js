import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const Button = ({ text, onPress, style }) => (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
    >
      <Text style={[styles.buttonText, style === styles.operatorButton && styles.operatorText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
        <Text style={styles.equation}>{equation}</Text>
      </View>
      
      <View style={styles.buttonRow}>
        <Button text="C" onPress={handleClear} style={styles.operatorButton} />
        <Button text="±" onPress={() => setDisplay((-parseFloat(display)).toString())} style={styles.operatorButton} />
        <Button text="%" onPress={() => setDisplay((parseFloat(display) / 100).toString())} style={styles.operatorButton} />
        <Button text="÷" onPress={() => handleOperator('/')} style={styles.operatorButton} />
      </View>
      
      <View style={styles.buttonRow}>
        <Button text="7" onPress={() => handleNumber('7')} />
        <Button text="8" onPress={() => handleNumber('8')} />
        <Button text="9" onPress={() => handleNumber('9')} />
        <Button text="×" onPress={() => handleOperator('*')} style={styles.operatorButton} />
      </View>
      
      <View style={styles.buttonRow}>
        <Button text="4" onPress={() => handleNumber('4')} />
        <Button text="5" onPress={() => handleNumber('5')} />
        <Button text="6" onPress={() => handleNumber('6')} />
        <Button text="-" onPress={() => handleOperator('-')} style={styles.operatorButton} />
      </View>
      
      <View style={styles.buttonRow}>
        <Button text="1" onPress={() => handleNumber('1')} />
        <Button text="2" onPress={() => handleNumber('2')} />
        <Button text="3" onPress={() => handleNumber('3')} />
        <Button text="+" onPress={() => handleOperator('+')} style={styles.operatorButton} />
      </View>
      
      <View style={styles.buttonRow}>
        <Button text="0" onPress={() => handleNumber('0')} style={styles.zeroButton} />
        <Button text="." onPress={() => handleNumber('.')} />
        <Button text="=" onPress={handleEqual} style={styles.equalsButton} />
      </View>

      <Text style={styles.signature}>Calculator by Akash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  displayContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  display: {
    fontSize: 48,
    color: '#000',
  },
  equation: {
    fontSize: 24,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#f0f0f0',
  },
  operatorText: {
    color: '#FF9500',
  },
  equalsButton: {
    backgroundColor: '#4CD964',
  },
  zeroButton: {
    width: 150,
  },
  signature: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});

export default Calculator;