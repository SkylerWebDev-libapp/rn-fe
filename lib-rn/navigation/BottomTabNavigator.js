import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-key" />,
        }}
      />
      <BottomTab.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          title: 'Create Account',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-paper" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Login':
      return 'Login';
    case 'CreateAccount':
      return 'Create an Account';
  }
}
