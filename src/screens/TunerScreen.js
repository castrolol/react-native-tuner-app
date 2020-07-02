import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import NoteView from '~/components/NoteView';
import NoteRule from '~/components/NoteRule';
import useTuner from '~/hooks/useTuner';

function TunerScreen() {
  const [, note] = useTuner();

  return (
    <SafeAreaView style={styles.root}>
      <NoteView note={note.name} cents={note.cents} />
      <NoteRule cents={note.cents} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#112',
    flex: 1,
  },
});

export default TunerScreen;
