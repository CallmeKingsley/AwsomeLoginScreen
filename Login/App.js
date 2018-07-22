import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


function RoundedButton ({title, color, backgroundColor, onPress}){

return (
<View style={[styles.ButtonStyle,{backgroundColor}]}>
   <Text style = { [ {color}] }  onPress={() =>  onPress()} >{title}</Text>
 </View>)
}

function UserInput ({icon,response,placeHolder,TypingFunc}){

  return (<View style={styles.inputBox}>
    
    <TextInput
          style={this.TextField}
          placeholder={placeHolder}
          onChangeText={(text) => TypingFunc({text})}
        />
    
    </View>)
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.image}>


      </View>
      <View style={styles.input}>
       <UserInput
       placeHolder = {'User Name'}
       TypingFunc = {this.TypingUserName}
      />
      <UserInput
       placeHolder = {'Password'}
       TypingFunc = {this.TypingPassword}
      />
      </View>
      <View style={styles.button}>
       < RoundedButton
       backgroundColor = {'yellow'}
       title = {'kingsley'}
       color = {'red'}
       onPress = {this.ButtonResponse}
       />
       </View >
       <View style={styles.LastButtonsView}>
       <View style={styles.LastButtons}>
       <Text>Sign in With FaceBook</Text>
        </View>
        <View style={styles.LastButtons}>
         <Text>New to App, Sign Up</Text>
        </View>
        </View>
      </View>
    );
  }
  TypingUserName =(data )=>{

    console.log(data)
  }
  TypingPassword =(data )=>{

    console.log(data)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
   margin: 30,
  },
  input:{
    //borderWidth: 2,
    //borderRadius : 10,
    marginTop: 50,
  },
  image:{
    //justifyContent: 'flex-start',
    height : 200,
    width: 200,
    backgroundColor: 'green'
  },
  ButtonStyle:{
  height : 50,
  width: 300,
 
  justifyContent: 'center',
  alignItems: 'center',

  },
  TextField:{
   
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  inputBox:{
    margin: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius : 10,
    borderColor : 'gray',
    height : 50,
    width: 300,
  },
  LastButtons:{

    backgroundColor : 'gray',
    height : 50,
    width: 380,
    
  },
  LastButtonsView:{
    
  }
});
