import React from 'react';
import {useState, useCallback} from 'react';
import {TextInput, Button, Text} from 'react-native';

export default function GroceryShoppingList() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <>
    <Text>Aaaa</Text>
      <TextInput
        value={groceryItem}
        placeholder="Enter grocery item"
        onChangeText={text => setGroceryItem(text)}
      />
      <Button title="Add the item to list" onPress={addNewItemToShoppingList} />
      {items.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
}
