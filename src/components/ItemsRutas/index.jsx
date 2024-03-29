import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RutaDetail from '../RutaDetail';

const ItemsRutas = ({img, text, recogida, destino, id}) => {
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);

  return (
    <Pressable
      onPress={() => setIsDetailOpen(!isDetailOpen)}
      style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={img} style={styles.logo} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{color: '#080808'}}>Recogida: {recogida}</Text>
        <Text style={{color: '#080808'}}>Destino: {destino}</Text>
      </View>
      <RutaDetail
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        itemId={id}
        img={img}
      />
    </Pressable>
  );
};

export default ItemsRutas;

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxHeight: 140,
    margin: 10,

    padding: 20,
    borderRadius: 20,

    shadowColor: '#474bff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 10,
    backgroundColor: '#f5f9fc',
  },
  textContainer: {
    padding: 12,
  },
  imgContainer: {
    gap: 15,
    flexDirection: 'row',
  },
  logo: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 25,
  },
  text: {
    color: '#080808',
    fontWeight: '700',
    fontSize: 17,
    textAlignVertical: 'center',
  },
});
