import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View,FlatList, Button} from 'react-native';
import OutputContainerComponent from './components/OutputContainerComponent';
import InputContainerComponents from './components/InputContainerComponents';

export default function App() {

  const [arrayTostoreUserinputs, setArrayToStoreUsernputs] = useState([])

  const [onShowModel, setOnShowModel] = useState(false)

  // console.log(arrayTostoreUserinputs)

  console.log(arrayTostoreUserinputs)


  // const listenToUsersInput = (userInputWhileTyping)=>setUserInput(userInputWhileTyping)

  //ideally this is the best way to keep adding users input to the array using a spread operator,
  //const addUserInputToArray = ()=> setArrayToStoreUsernputs([...arrayTostoreUserinputs, userInput])

  //but then i always way to create something like a variable or  betterstill an anonymus function that stores the present array condition, i dont want to 
  //use arraysToStoreUsersInput as my updated array, rather i want to store the updated array in like a function

  // const addUserInputToArray = ()=> setArrayToStoreUsernputs(updatedArrayToStoreUsersInput => {return [...updatedArrayToStoreUsersInput, userInput]})

  const addUserInputToArray = (userInputPassedAsProps)=>{
    setArrayToStoreUsernputs((updatedArrayToStoreUsersInput) => {
      return [...updatedArrayToStoreUsersInput, {key: Math.random().toString(), value:userInputPassedAsProps}]
    })
    setOnShowModel(false)
  }

  const deleteUserInputFromArray =(clickedUserOutputKey)=>{
    setArrayToStoreUsernputs(updateArrayOnUsersInput =>{
      return updateArrayOnUsersInput.filter((clickedUserOutput)=>{
        return clickedUserOutput.key != clickedUserOutputKey
      })
    })
  }

  const cancelModel = ()=>{
    setOnShowModel(false)
  }



  

  //const useTextInputValue = ()=>{console.log(userInput)}


  return (
    <View style={styles.main}>
      <Button title = "Add New Task" onPress={()=>setOnShowModel(true)} />
      <InputContainerComponents cancelModelInInputContainer = {cancelModel}  modelVisivility = {onShowModel} listenToUserInputOnPressButton = {addUserInputToArray} />

     <FlatList data = {arrayTostoreUserinputs}
     renderItem={it => <OutputContainerComponent onDelete={deleteUserInputFromArray.bind(this, it.item.key)} title = {it.item.value} />} />
        {/* {arrayTostoreUserinputs.map(function(item){<Text>{item}</Text>})} */}

        {/* {arrayTostoreUserinputs.map((item) =>{return <View style={styles.outputContainer} key= {item}><Text >{item}</Text></View>})} */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    padding: 30
  },
});



// functions blue parameters red