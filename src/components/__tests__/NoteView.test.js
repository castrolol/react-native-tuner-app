import React from 'react';
import {render, getNodeText} from '@testing-library/react-native';
import NoteView from '../NoteView';
import colors from '~/res/colors';
import {getNodeStyle} from '~/helpers';

test('Deve renderizar', () => {
  render(<NoteView />);
});

test('Deve exibir mensagem inicial', () => {
  const {getByLabelText} = render(<NoteView />);

  const notaText = getByLabelText('Nota atual');

  expect(getNodeText(notaText)).toEqual('Toque uma nota');
});

test('Deve exibir nota sem acidentes', () => {
  const {getByLabelText} = render(<NoteView note="A" />);

  const notaText = getByLabelText('Nota atual');

  expect(getNodeText(notaText)).toEqual('A');
});

test('Deve exibir nota com acidentes', () => {
  const {getByLabelText, rerender} = render(<NoteView note="Db" />);

  const notaBemolText = getNodeText(getByLabelText('Nota atual'));

  rerender(<NoteView note="C#" />);

  const notaSustenidoText = getNodeText(getByLabelText('Nota atual'));

  expect(notaBemolText).toEqual('Db');
  expect(notaSustenidoText).toEqual('C#');
});

test('Deve exibir as cores pra nota afinada', () => {
  const {getByLabelText} = render(<NoteView note="Db" cents={0} />);
  const notaText = getByLabelText('Nota atual');

  expect(getNodeStyle(notaText)).toMatchObject({color: colors.exactlyNote});
});

test('Deve exibir as cores pra nota abaixo da afinação', () => {
  const {getByLabelText} = render(<NoteView note="Db" cents={-0.1} />);
  const notaText = getByLabelText('Nota atual');

  expect(getNodeStyle(notaText)).toMatchObject({color: colors.downOfNote});
});

test('Deve exibir as cores pra nota acima da afinação', () => {
  const {getByLabelText} = render(<NoteView note="Db" cents={0.1} />);
  const notaText = getByLabelText('Nota atual');

  expect(getNodeStyle(notaText)).toMatchObject({color: colors.upOfNote});
});
