import React, {useMemo, useEffect, useState} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import colors from '~/res/colors';

const sizes = [5, 4, 3, 3, 4, 5, 4, 3, 3, 4];
const ruleMarks = [];
const baseSize = 180;

for (let i = 9; i > 0; i--) {
  ruleMarks.push({
    item: i * -10,
    size: sizes[i],
  });
}
ruleMarks.push({
  item: 0,
  size: 7,
});
for (let i = 1; i <= 9; i++) {
  ruleMarks.push({
    item: i * 10,
    size: sizes[i],
  });
}

function RuleBar({mark, size, active}) {
  const [scaleAnimated] = useState(new Animated.Value(1));

  const hsize = useMemo(() => {
    return baseSize * (size / 7);
  }, [size]);

  useEffect(() => {
    Animated.spring(scaleAnimated, {
      toValue: active ? 1.25 : 1,
      useNativeDriver: false,
    }).start();
  }, [active, scaleAnimated]);

  const color = useMemo(() => {
    if (!active) return colors.emptyRuleBar;
    if (mark < 0) return colors.downRuleBar;
    if (mark > 0) return colors.upRuleBar;
    return colors.tunedRuleBar;
  }, [active, mark]);

  const testID = useMemo(() => {
    if (mark > 0) return `barra-${mark}-positivo`;
    if (mark < 0) return `barra${mark}-negativo`;
    return 'barra-afinado';
  }, [mark]);

  return (
    <Animated.View
      style={[
        styles.ruleBar,
        {
          height: hsize,
          backgroundColor: color,
          transform: [{scale: scaleAnimated}],
        },
      ]}
      testID={testID}
    />
  );
}

function NoteRule({cents}) {
  const activeRule = useMemo(() => {
    let roundedCents = Math.round(cents / 10) * 10;
    roundedCents = Math.max(roundedCents, -90);
    roundedCents = Math.min(roundedCents, 90);
    if (typeof cents === 'undefined' || cents === null) return roundedCents;
    if (roundedCents !== 0) return roundedCents;
    return 0;
  }, [cents]);

  return (
    <View style={styles.root}>
      {ruleMarks.map(value => (
        <RuleBar
          active={activeRule === value.item}
          key={value.item}
          size={value.size}
          mark={value.item}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexBasis: 300,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ruleBar: {
    width: 4,
    borderRadius: 4,
  },
});

export default NoteRule;
