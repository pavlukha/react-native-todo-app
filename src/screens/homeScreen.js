import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import InputBoards from '../components/InputBoard';
import Boards from '../components/Boards';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <InputBoards />
        <ScrollView>
          <Boards navigation={props.navigation} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30444E',
  },
});

export default HomeScreen;
