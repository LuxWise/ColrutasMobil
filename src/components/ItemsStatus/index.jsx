import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RutaDetail from '../RutaDetail';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ItemsStautus = ({Status}) => {
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);
  const status = {
    EnCamino: [
      <Fontisto name="bus" size={50} color="#38d7b7" />,
      <Text style={styles.text}>En marcha</Text>,
      '#38d7b7',
    ],
    Alerta: [
      <Material name="alert-octagon" size={50} color="#fff" />,
      <Text style={styles.text}>Alerta</Text>,
      '#cced46',
    ],
    Problema: [
      <Entypo name="circle-with-cross" size={50} color="#fff" />,
      <Text style={styles.text}>Problema</Text>,
      '#e08670',
    ],
  };
  return (
    <Pressable
      onPress={() => setIsDetailOpen(!isDetailOpen)}
      style={[styles.container, {borderColor: `${status[Status][2]}`}]}>
      <View
        style={[
          styles.imgContainer,
          {backgroundColor: `${status[Status][2]}`},
        ]}>
        {status[Status][0]}
      </View>
      <View style={styles.textContainer}>{status[Status][1]}</View>
      <RutaDetail
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
      />
    </Pressable>
  );
};

export default ItemsStautus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 330,
    maxHeight: 140,
    margin: 10,
    gap: 20,

    padding: 22,
    borderRadius: 25,

    shadowColor: '#080808',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 11.78,
    elevation: 8,
    backgroundColor: '#f5f9fc',

    borderWidth: 3,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 50,
  },
  logo: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 25,
  },
  text: {
    color: '#080808',
    fontWeight: '700',
    fontSize: 25,
    textAlignVertical: 'center',
  },
});
