import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
        <Header
            leftComponent = {{ icon: 'menu', color: '#fff' }}
            centerComponent = {{ text: 'OpenCast', style: { color: '#fff' } }}
            rightComponent = {{ icon: 'cast', color: '#fff' }}
        />
    );
  }
}

const styles = StyleSheet.create({

});
