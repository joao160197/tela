import React, {useState} from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert, StyleSheet } from 'react-native';


const Formulario : React.FC<any> = () => {

  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  return (
    <View style={estilos.container}>
      <Text>Nome:</Text>
      <TextInput style={estilos.input}
        value={nome} onChangeText={setNome}/>
      <Text>Telefone:</Text>
      <TextInput style={estilos.input} 
        value={telefone} onChangeText={setTelefone}/>
      <Text>Email:</Text>
      <TextInput style={estilos.input} 
        value={email} onChangeText={setEmail}/>
      <TouchableHighlight onPress={()=>{

        const obj = {nome, telefone, email};
        console.log( obj );

      } }>
        <View style={estilos.button}>
          <Text style={estilos.buttonText}>Salvar</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const estilos = StyleSheet.create({

  container : { 
    backgroundColor: "lightgray" ,
    margin: 25,
    flex: 1,
    padding: 5
  },
  buttonText: { 
    color: "white"
  },
  input: {
    backgroundColor: "lightcyan",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    padding: 5
  },
  button : { 
    backgroundColor: "navy",
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 5}

  }
});

export default Formulario;