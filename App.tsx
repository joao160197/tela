import React, {useState} from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert, StyleSheet, ToastAndroid } from 'react-native';


const Formulario : React.FC<any> = () => {

  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  const [lista, setLista] = useState<Array<any>>([

    {nome : "Joao Silva", telefone: "(11) 1111-1111", email: "joao@teste.com"}

  ]);


  const listaMostrar = [] 

  for(let i = 0; i < lista.length; i++) {
    const obj = lista[i];
    listaMostrar.push(
      <View style={{backgroundColor: "lightyellow", borderColor: "red",
      borderWidth: 2, padding: 15, margin: 10, borderRadius: 20}}>
        <Text>{obj.nome}</Text>
        <Text>{obj.telefone}</Text>
        <Text>{obj.email}</Text>
      </View>);
  }

  return (
    <View style={estilos.container}>
      <View style={{flex: 1}}>
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

          setLista( [ ...lista, obj ] );
          // Alert.alert("Contato", "Contato salvo com sucesso");
          ToastAndroid.show("Contato Salvo com sucesso", ToastAndroid.LONG);

        } }>
          <View style={estilos.button}>
            <Text style={estilos.buttonText}>Salvar</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{flex: 2}}>
        {listaMostrar}
      </View>
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