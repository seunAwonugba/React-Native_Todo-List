import React from "react";
import {View, Text, StyleSheet,TouchableOpacity} from "react-native"

const OutputContainerComponent = props =>{
    return (
        <TouchableOpacity activeOpacity={0.5} onPress = {props.onDelete}>
            <View style={styles.outputContainer}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    outputContainer:{
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
      },
})

export default OutputContainerComponent