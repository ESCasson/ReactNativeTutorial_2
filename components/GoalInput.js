import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal]  = useState(''); 

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      };

    return (
    <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" 
            style={styles.input} onChangeText={goalInputHandler} 
            value={enteredGoal} />
            <Button title="CANCLE" color="red" onPress={props.onCancel}/>
            <Button title="ADD" onPress ={addGoalHandler}/>
        </View>
    </Modal>
        
    )};

    const styles = StyleSheet.create( {
        inputContainer: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center'},

            input: {
                borderColor: 'black', 
                borderWidth: 2, padding: 10, width: 200,
                marginBottom: 5
            },
            
    });

    export default GoalInput;

