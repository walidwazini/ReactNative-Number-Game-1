import React , {useState}  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState()
  const [guessRounds,setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess the Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
