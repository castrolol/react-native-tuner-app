import React from 'react';
import {render, getNodeText} from '@testing-library/react-native';
import TunerScreen from '../TunerScreen';

test('Deve renderizar', () => {
  render(<TunerScreen />);
});
