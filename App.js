import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber1, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const configureNewGameHanlder = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber1} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen
      roundsNumber={guessRounds} userNumber2={userNumber1} onRestart={configureNewGameHanlder} />
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
