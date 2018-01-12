import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Header
            leftComponent = {{ icon: 'menu', color: '#fff' }}
            centerComponent = {{ text: 'OpenCast', style: { color: '#fff' } }}
            rightComponent = {{ icon: 'home', color: '#fff' }}
        />
    );
  }
}

const styles = StyleSheet.create({

});
