import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import notesReducer from './src/reducers/notesReducer';
import NotesList from './src/screens/NotesList';

const Stack = createStackNavigator();
const store = createStore(notesReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={NotesList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
