import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import ItemsHome from '../../components/ItemsHome';
import TopMenu from '../../layout/TopMenu';

const Dashboard = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Bienvenido</Text>
      </View>
      <ItemsHome
        direction="Rutas"
        navigation={navigation}
        icon="map-pin"
        text="Rutas"
        text2="Consulta de rutas programadas"
      />
      <ItemsHome
        direction="ListaRuta"
        navigation={navigation}
        icon="clipboard"
        text="Lista de alumnos"
        text2="Consulta la lista de los alumnos"
      />
      <ItemsHome
        direction="ListaRutas"
        navigation={navigation}
        icon="calendar"
        text="Listado de rutas"
        text2="Consulta la lista de los alumnos"
      />
      <ItemsHome
        direction="EstadoRutas"
        navigation={navigation}
        icon="calendar"
        text="Estado Rutas"
        text2="Consulta la lista de los alumnos"
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f9fc',
    paddingVertical: 20,
  },
  textContainer: {
    width: '85%',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  header: {
    color: '#080808',
    fontWeight: 'bold',
    fontSize: 30,
    left: 0,
  },
});
