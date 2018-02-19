import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';

import styles from './styles';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Header
          centerComponent={{ text: 'OpenCast', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'cast',
            color: '#fff',
            onPress: () => Alert.alert('casting'),
          }}
        />
      </View>
    );
  }
}