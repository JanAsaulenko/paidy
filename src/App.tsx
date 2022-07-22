/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import Modal from 'react-native-modal';

import {Form} from './containers';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = useCallback(() => {
    setModalVisible(prevState => !prevState);
  }, []);

  const handleSumbit = React.useCallback(
    props => {
      console.log(props);
      toggleModal();
    },
    [toggleModal],
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button title="Open modal" onPress={(toggleModal)} />
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              flex: 1,
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: 'center',
            }}>
            <Form hideModal={toggleModal} handleSubmit={handleSumbit} />
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
