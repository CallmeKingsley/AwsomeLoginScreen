import React from 'react';
import { StyleSheet, Text, View,TextInput,Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from './Assets/image121.png'

function RoundedButton ({title, color, backgroundColor, onPress}){

return (
<View >
  <TouchableHighlight
  onPress={() =>  onPress()}
  style={[styles.ButtonStyle,{backgroundColor}]}
  >
   <Text style = { [ {color}] }   >{title}</Text>
   </TouchableHighlight>
 </View>)
}

function UserInput ({icon,response,placeHolder,TypingFunc,security}){

  return (<View style={styles.inputBox}>
     
      <View>
    <Icon name={icon} size={23} color="rgba(106, 154, 104, 1.0)" />
    </View>
    <View>
    <TextInput
          secureTextEntry={security}
          style={styles.TextField}
          maxLength = {50}
          placeholder={placeHolder}
          onChangeText={(text) => TypingFunc({text})}
        />
      </View>
    </View>)
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.image}>

           <Image source={image} style={{width: 210, height: 210}} />
      </View>
      <View style={styles.input}>
       <UserInput
       placeHolder = {'User Name'}
       TypingFunc = {this.TypingUserName}
       icon ={'user'}
       security = {false}
      />
      <UserInput
       placeHolder = {'Password'}
       TypingFunc = {this.TypingPassword}
       icon = {'lock'}
       security = {true}
      />
      </View>
      <View style={styles.button}>
       < RoundedButton
       backgroundColor = {'rgba(106, 154, 104, 1.0)'}
       title = {'Button'}
       color = {'white'}
       onPress = {this.ButtonResponse}
       />
       </View >
       <View style={styles.LastButtonsView}>
       <View style={styles.LastButtons}>
       <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
        Login with Facebook
       </Icon.Button>
        </View>
        <View style={styles.LastButtonGmail}>
        <Icon.Button name="google" color = 'red' backgroundColor="white" onPress={this.loginWithFacebook}>
        Login with Gmail
       </Icon.Button>
        </View>
        <View style={styles.LastButtons}>
        <Icon.Button   name = "user" backgroundColor="rgba(106, 154, 104, 1.0)" onPress={this.loginWithFacebook}>
         New to the App, Sign up now!
       </Icon.Button>
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
  ButtonResponse =()=>{
    console.log("submit button")
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
  borderRadius : 10,
  justifyContent: 'center',
  alignItems: 'center',

  },
  TextField:{
    margin: 20,
    fontSize: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputBox:{
    flexDirection:"row",
    margin: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius : 10,
    borderColor : 'gray',
    height : 50,
    width: 300,
  },
  LastButtons:{

   
    height : 50,
    width: 380,
    
  },
  LastButtonsView:{
    
  },
  LastButtonGmail:{
  marginBottom: 10,
  borderWidth: 2,
  borderColor: 'red',
  borderRadius : 5,
  }
});
