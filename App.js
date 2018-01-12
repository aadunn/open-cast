import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f2f2f2',
  },
});

export default class App extends React.Component {
  render() {
    const list = [
      {
        title: 'Web Browser',
        icon: 'web',
      },
      {
        title: 'Local Photo Library',
        icon: 'photo-library',
      },
    ];
    return (
      <View style={styles.main}>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => alert('menu'),
          }}
          centerComponent={{ text: 'OpenCast', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'cast',
            color: '#fff',
            onPress: () => alert('casting'),
          }}
        />
        <View>
          <List containerStyle={{ marginTop: 100 }}>
            {
              list.map((item, key) => (
                <ListItem
                  key={key}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  onPress={() => {
                    alert('i\'ve been tapped');
                  }}
                />
              ))
            }
          </List>
        </View>
      </View>
    );
  }
}
