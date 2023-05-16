import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/theme';

type ProgressBarProps = {
  questionuNumber: number;
  progressPercent: string;
};

const ProgressBar = ({progressPercent, questionuNumber}: ProgressBarProps) => {
  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressText}>Question {questionuNumber} of 3</Text>
      <View style={styles.progress}>
        <View style={[styles.progressCompleted, {width: progressPercent}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    gap: 20,
    paddingTop: 30,
  },
  progressText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
  },
  progress: {
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 14,
    height: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  progressCompleted: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.primary,
    width: '70%',
    height: '100%',
  },
});
export default ProgressBar;
