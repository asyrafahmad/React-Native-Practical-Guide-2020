import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]); //array

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);     //array
  };

  return (
    <View style = {styles.root}>
      <View style = {styles.inputContainer}>
        <TextInput 
          placeholder = "Course Goal" 
          style ={styles.input} 
          onChangeText={goalInputHandler} 
          value = {enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {/* 
          map() = return an array result  
          key = unique key
        */}
        {courseGoals.map((goal) => <Text key={goal}>{goal} </Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: { 
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding : 10
  }

});



/////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import { Text, View } from 'react-native';


// export default function App() {
//   return(
//     <View style={{ 
//       padding: 50, 
//       flexDirection: 'row', 
//       width: '80%', 
//       height: 300, 
//       justifyContent: "space-around", 
//       alignItems: 'stretch'
//     }}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>1</Text>
//       </View>
//       <View 
//         style={{
//           backgroundColor: 'yellow',
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//       <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           flex: 3,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>3</Text>
//       </View>
//     </View>
//   )
// }


////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// export default function App() {
//   return (
//     <View style = {{padding: 50}}>
//       <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
//         <TextInput 
//           placeholder = "Course Goal" 
//           // style = {{borderBottomColor: 'black', borderWidth: 1}} />
//           style = {{ width: '80%', borderColor: 'black', borderWidth: 1, padding : 10}} 
//         />
//         <Button title="ADD" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
