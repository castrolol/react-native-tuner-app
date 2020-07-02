import React from 'react';
import {render} from '@testing-library/react-native';
import NoteRule from '../NoteRule';
import {getNodeStyle} from '~/helpers/index';
import colors from '~/res/colors';

test('Deve renderizar', () => {
  render(<NoteRule />);
});

test('Deve mostrar a regua vazia', () => {
  const {getByTestId} = render(<NoteRule />);

  const barra90n = getByTestId('barra-90-negativo');
  const barra80n = getByTestId('barra-80-negativo');
  const barra70n = getByTestId('barra-70-negativo');
  const barra60n = getByTestId('barra-60-negativo');
  const barra50n = getByTestId('barra-50-negativo');
  const barra40n = getByTestId('barra-40-negativo');
  const barra30n = getByTestId('barra-30-negativo');
  const barra20n = getByTestId('barra-20-negativo');
  const barra10n = getByTestId('barra-10-negativo');
  const barraAfinado = getByTestId('barra-afinado');
  const barra10p = getByTestId('barra-10-positivo');
  const barra20p = getByTestId('barra-20-positivo');
  const barra30p = getByTestId('barra-30-positivo');
  const barra40p = getByTestId('barra-40-positivo');
  const barra50p = getByTestId('barra-50-positivo');
  const barra60p = getByTestId('barra-60-positivo');
  const barra70p = getByTestId('barra-70-positivo');
  const barra80p = getByTestId('barra-80-positivo');
  const barra90p = getByTestId('barra-90-positivo');

  expect(getNodeStyle(barra90n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra80n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra70n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra60n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra50n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra40n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra30n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra20n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra10n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barraAfinado)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra10p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra20p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra30p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra40p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra50p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra60p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra70p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra80p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra90p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
});

test('Deve mostrar a regua quando a nota ta afinada', () => {
  const {getByTestId} = render(<NoteRule cents={0} />);

  const barra50n = getByTestId('barra-50-negativo');
  const barraAfinado = getByTestId('barra-afinado');
  const barra50p = getByTestId('barra-50-positivo');

  expect(getNodeStyle(barra50n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barraAfinado)).toMatchObject({
    backgroundColor: colors.tunedRuleBar,
  });
  expect(getNodeStyle(barra50p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
});

test('Deve mostrar a regua quando a nota ta abaixo', () => {
  const {getByTestId} = render(<NoteRule cents={-46} />);

  const barra50n = getByTestId('barra-50-negativo');
  const barraAfinado = getByTestId('barra-afinado');
  const barra50p = getByTestId('barra-50-positivo');

  expect(getNodeStyle(barra50n)).toMatchObject({
    backgroundColor: colors.downOfNote,
  });
  expect(getNodeStyle(barraAfinado)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra50p)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
});

test('Deve mostrar a regua quando a nota ta acima', () => {
  const {getByTestId} = render(<NoteRule cents={46} />);

  const barra50n = getByTestId('barra-50-negativo');
  const barraAfinado = getByTestId('barra-afinado');
  const barra50p = getByTestId('barra-50-positivo');

  expect(getNodeStyle(barra50n)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barraAfinado)).toMatchObject({
    backgroundColor: colors.emptyRuleBar,
  });
  expect(getNodeStyle(barra50p)).toMatchObject({
    backgroundColor: colors.upRuleBar,
  });
});

test('Deve mostrar no somente as reguas no limite', () => {
  const {getByTestId, rerender} = render(<NoteRule cents={-106} />);

  const barra90nStyle = getNodeStyle(getByTestId('barra-90-negativo'));

  rerender(<NoteRule cents={106} />);

  const barra90pStyle = getNodeStyle(getByTestId('barra-90-positivo'));

  expect(barra90nStyle).toMatchObject({
    backgroundColor: colors.downRuleBar,
  });
  expect(barra90pStyle).toMatchObject({
    backgroundColor: colors.upRuleBar,
  });
});
