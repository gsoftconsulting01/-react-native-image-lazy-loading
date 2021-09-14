import React from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Image from 'react-native-image-lazy-loading';

const MarvelList = [
  { id: 1, name: 'Black Panter' },
  { id: 2, name: 'Black Widow' },
  { id: 3, name: 'Captain America' },
  { id: 4, name: 'The Collector' },
  { id: 5, name: 'Doctor Strange' },
  { id: 6, name: 'Hawkeye' },
  { id: 7, name: 'Heimdall' },
  { id: 8, name: 'Hela' },
  { id: 9, name: 'Hulk' },
  { id: 10, name: 'Iron Man' },
  { id: 11, name: 'Loki' },
  { id: 12, name: 'Nick Fury' },
  { id: 13, name: 'Falcon' },
  { id: 14, name: 'Wanda Maximoff' },
  { id: 15, name: 'Shocker' },
  { id: 16, name: 'Spider-Man' },
  { id: 17, name: 'Thanos' },
  { id: 18, name: 'Thor' },
  { id: 19, name: 'Valkyrie' },
  { id: 20, name: 'Vision' },
  { id: 21, name: 'Vulture' },
  { id: 22, name: 'War Machine' },
  { id: 23, name: 'Winter Solder' },
  { id: 1, name: 'Black Panter' },
  { id: 2, name: 'Black Widow' },
  { id: 3, name: 'Captain America' },
  { id: 4, name: 'The Collector' },
  { id: 5, name: 'Doctor Strange' },
  { id: 6, name: 'Hawkeye' },
  { id: 7, name: 'Heimdall' },
  { id: 8, name: 'Hela' },
  { id: 9, name: 'Hulk' },
  { id: 10, name: 'Iron Man' },
  { id: 11, name: 'Loki' },
  { id: 12, name: 'Nick Fury' },
  { id: 13, name: 'Falcon' },
  { id: 14, name: 'Wanda Maximoff' },
  { id: 15, name: 'Shocker' },
  { id: 16, name: 'Spider-Man' },
  { id: 17, name: 'Thanos' },
  { id: 18, name: 'Thor' },
  { id: 19, name: 'Valkyrie' },
  { id: 20, name: 'Vision' },
  { id: 21, name: 'Vulture' },
  { id: 22, name: 'War Machine' },
  { id: 23, name: 'Winter Solder' },
  { id: 1, name: 'Black Panter' },
  { id: 2, name: 'Black Widow' },
  { id: 3, name: 'Captain America' },
  { id: 4, name: 'The Collector' },
  { id: 5, name: 'Doctor Strange' },
  { id: 6, name: 'Hawkeye' },
  { id: 7, name: 'Heimdall' },
  { id: 8, name: 'Hela' },
  { id: 9, name: 'Hulk' },
  { id: 10, name: 'Iron Man' },
  { id: 11, name: 'Loki' },
  { id: 12, name: 'Nick Fury' },
  { id: 13, name: 'Falcon' },
  { id: 14, name: 'Wanda Maximoff' },
  { id: 15, name: 'Shocker' },
  { id: 16, name: 'Spider-Man' },
  { id: 17, name: 'Thanos' },
  { id: 18, name: 'Thor' },
  { id: 19, name: 'Valkyrie' },
  { id: 20, name: 'Vision' },
  { id: 21, name: 'Vulture' },
  { id: 22, name: 'War Machine' },
  { id: 23, name: 'Winter Solder' },
];

const myKeyExtractor = (item: any) => {
  return item.id;
};

const renderItem = () => {
  let source = {
    uri: 'https://ak.picdn.net/shutterstock/videos/13318067/thumb/1.jpg?ip=x480',
  };

  return <Image source={source} style={styles.image} />;
};
const Marvel = () => {
  return (
    <SafeAreaView style={styles.separateHero}>
      <FlatList
        data={MarvelList}
        renderItem={renderItem}
        keyExtractor={myKeyExtractor}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ff0000',
  },
  separateHero: {
    flex: 1,
  },
  image: {
    width: width / 2,
    height: width / 2,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default Marvel;
