import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomReturn from '../../components/customReturn';
import TopMenu from '../../layout/TopMenu';
import ItemsStautus from '../../components/ItemsStatus';

const EstadoRutas = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  const handleBackButton = () => {
    navigation.replace('Home');
    return true;
  };

  const redirict = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn
        icon="clipboard"
        onPress={redirict}
        text="Estado de rutas"
      />
      <ScrollView style={{width: '100%'}}>
        <View style={{padding: 20, alignItems: 'center'}}>
          <ItemsStautus Status="EnCamino" />
          <ItemsStautus Status="Alerta" />
          <ItemsStautus Status="Problema" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EstadoRutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f5f9fc',
  },
});
