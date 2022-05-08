import React , {useState, useRef} from 'react'
import 'react-native-get-random-values';
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk' },
    {id: 2, text: 'Eggs' },
    {id: 3, text: 'Bread' },
    {id: 4, text: 'Juice' },
])

const deleteItem  = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id)
  })
}

const addItem = (text) => {
  if(!text) {
    Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
  } else{
    setItems(prevItems => {
      return [{id: Math.random().toString(36).slice(2), text}, ...prevItems]
    });
  }
}

const inputRef = useRef()
const submitAndClear = () => {
  inputRef.current.setNativeProps({ text: "" })
}
  return(
    <View style={styles.container}>
      <Header title='Grocery List'/>   
      <AddItem addItem={addItem} />
      <FlatList 
      data={items} 
      renderItem={({item}) => 
      <ListItem item={item} deleteItem={deleteItem} />}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    paddingTop: 60
  },
 
})

export default App;