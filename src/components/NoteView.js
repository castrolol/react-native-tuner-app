import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '~/res/colors';

function NoteView({note, cents}) {
  const noteText = useMemo(() => {
    if (!note) {
      return 'Toque uma nota';
    }
    return note;
  }, [note]);

  const noteStyle = useMemo(() => {
    if (cents < 0) return styles.downNoteText;
    if (cents === 0) return styles.exactlyNoteText;
    if (cents > 0) return styles.upNoteText;
  }, [cents]);

  return (
    <View>
      <Text
        style={[styles.noteText, noteStyle]}
        accessibilityLabel="Nota atual">
        {noteText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noteText: {
    color: colors.noneNote,
    fontSize: 100,
    textAlign: 'center',
  },
  exactlyNoteText: {
    color: colors.exactlyNote,
  },
  upNoteText: {
    color: colors.upOfNote,
  },
  downNoteText: {
    color: colors.downOfNote,
  },
});

export default NoteView;
