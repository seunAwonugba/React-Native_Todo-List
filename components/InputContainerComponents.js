import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const InputContainerComponents =  props => {
    const [userInput, setUserInput] = useState("")

    const listenToUsersInput = (userInputWhileTyping)=>{setUserInput(userInputWhileTyping)}

    const addUserInputToArrayAndClearTextField = ()=>{
        props.listenToUserInputOnPressButton(userInput);
        setUserInput("")
    }
    
    return(
        <Modal visible = {props.modelVisivility} animationType ="slide">

        <View style={styles.inputContainer}>
            <TextInput placeholder="Add a new task..." style= {styles.textInput} onChangeText={listenToUsersInput} value = {userInput}/>
            <View style = {styles.buttonView}>
                <View style = {styles.buttonWidth}>
                    <Button title="add" onPress = {addUserInputToArrayAndClearTextField}></Button>
                </View>

                <View  style = {styles.buttonWidth}>
                    <Button title = "Cancel" color="red" onPress = {props.cancelModelInInputContainer}/>
                </View>
            </View>
        </View>
        </Modal>

    )

}

const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      textInput:{
        borderColor: "blue",
        borderWidth: 1,
        width: "80%",
        padding: 10,
        marginBottom: 10
      },

      cancelButton:{
          backgroundColor: "red",
          marginVertical: 10
      },

      buttonView:{
          display:"flex",
          flexDirection: "row",
          alignItems: "center",
          width: "80%",
          justifyContent: "space-around"
      },

      buttonWidth:{
          width: "40%"

      }

})

export default InputContainerComponents

// .bind(this, userInput)