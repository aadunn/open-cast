import React from 'react';
import { View, Alert } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';

import styles from './styles';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
          }}
          centerComponent={{ text: 'OpenCast', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'cast',
            color: '#fff',
            onPress: () => Alert.alert('casting'),
          }}
        />
        <View>
          <List containerStyle={{ marginTop: 100 }}>
            {
              <ListItem
                title={ 'Web Browser' }
                leftIcon={{ name: 'web' }}
                onPress={() => {
                  this.props.navigation.navigate('webBrowser');
                }}
              />
            },
            {
              <ListItem
                title={ 'Photo Library' }
                leftIcon={{ name: 'photo-library' }}
                onPress={() => {
                  this.props.navigation.navigate('photos');
                }}
              />
            },
          </List>
        </View>
      </View>
    );
  }
}
