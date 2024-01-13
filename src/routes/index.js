import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ButtomTabs from '../containers/ButtomTabs';
import Rutas from '../screens/Rutas';
import EstadoRutas from '../screens/EstadoRutas';
import Login from '../screens/login';
import ListaRutas from '../screens/ListaRutas';
import ListaAlumnos from '../screens/ListaAlumnos';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={ButtomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rutas"
        component={Rutas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaRuta"
        component={ListaAlumnos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EstadoRutas"
        component={EstadoRutas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaRutas"
        component={ListaRutas}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default Routes;
