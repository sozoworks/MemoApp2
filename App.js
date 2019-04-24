import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.headerSpace}>
          <MemoDetailScreen />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSpace: {
    flex: 1,
    width: '100%',
    marginTop: 78,
  },
});
