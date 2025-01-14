import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

const mensagens = [
  "A jornada de mil milhas começa com um único passo.",
  "A sorte favorece os corajosos.",
  "Seu futuro está cheio de possibilidades infinitas.",
  "Uma surpresa agradável está esperando por você.",
  "Acredite em si mesmo e tudo será possível.",
  "A paciência é a chave para o sucesso.",
  "Grandes coisas estão chegando para você.",
  "Sua criatividade levará você a novos horizontes.",
  "A felicidade está ao seu alcance.",
  "Boas notícias estão a caminho.",
  'Você terá uma grande surpresa em breve!',
  'O sucesso virá de onde menos espera.',
  'Prepare-se para um novo começo.',
  'A felicidade está ao seu alcance.',
]

export default function FortuneScreen() {

  const [fortune, setFortune] = useState('Sua sorte está prestes a mudar!');
  const getRandomFortune = () => {

    const indexRandom = Math.floor(Math.random() * mensagens.length);
    setFortune(mensagens[indexRandom]);
  };


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Biscoito da Sorte</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={require('@/assets/images/fortune.png')} // Substitua com a imagem adequada
            style={styles.image}
          />
        </View>
        <Text style={styles.fortuneText}>{fortune}</Text>
        <Animatable.View
        animation="bounceIn"
        easing="ease-out"
        iterationCount={1}
        style={styles.buttonWrapper}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={getRandomFortune}
          activeOpacity={0.8} 
        >
          <Text style={styles.buttonText}>{"Abra o biscoito da sorte!"}</Text>
        </TouchableOpacity>
      </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(45deg, #9B4DCA, #F06D8C)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6347',
    textAlign: 'center',
    marginBottom: 16,
  },
  imageWrapper: {
    width: 192,
    height: 192,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fortuneText: {
    textAlign: 'center',
    color: '#4A4A4A',
    fontSize: 20,
    minHeight: 60,
    marginBottom: 16,
  },
  buttonWrapper: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#FF6347', // Tomato red
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    elevation: 10, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});