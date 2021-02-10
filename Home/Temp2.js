import * as React from 'react';
import { Button, View, Text} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

export default class Temp2 extends React.Component {
  render(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        // onPress={() => navigation.navigate('Notifications')}
        // onPress={this.props.navigation.navigate('Main')}
        onPress={() => this.props.navigation.navigate('p1')}

        title="Go to notifications"
      />
      <Text>Tempp2 page</Text>
    </View>
  );
}
}
