
import React, {Fragment} from 'react';
import {
  Text, 
  Image, 
  ScrollView,
  Dimensions,
  StyleSheet} from 'react-native';

const largura = Dimensions.get("screen").width;
const App = () => {
  return (
    <ScrollView>
      <Text>Junior</Text>
      <Image 
        source={require("./res/img/alura.jpg")}
        style={estilo.imagem}
      />
      <Text>Dani</Text>
      <Image 
        source={require("./res/img/alura.jpg")}
        style={estilo.imagem}
      />
    </ScrollView>
  )
};

const estilo = StyleSheet.create({
  imagem: {
    width:largura,
    height:largura 
  }
});
export default App;
