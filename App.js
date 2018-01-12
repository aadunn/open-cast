import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'OpenCast', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'cast', color: '#fff' }}
                />
                <View style={{ flex: 1 }}>
                    <Button style={{ flex: 1, border: '2px', borderColor: '#000'}}
                        onPress={() => {

                        }}
                        title="Web Browser"
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});
