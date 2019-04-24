import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2019/04/09</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoContentDetail}>講座のアイデア</Text>
        </View>

        <CircleButton color="white" style={styles.editButton}>{'\uf303'}</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#FFF',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
  memoContentDetail: {
    fontSize: 15,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
