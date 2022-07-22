import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Spacer} from '../components/Spacer';

const IMAGE_SIZE = 20;
export const FormHeader = ({hideModal, amount, name}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconsWrapper}>
        <Icon name="chevron-left" size={IMAGE_SIZE} color={'#9c9b98'} />

        <TouchableOpacity onPress={hideModal}>
          <Icon name="close" size={IMAGE_SIZE} color={'#9c9b98'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.textBlock}>
          <Spacer height={10} />
          <Text style={[styles.title, {lineHeight: 15, fontSize: 15}]}>
            {name}
          </Text>
          <Text style={styles.title}>¥{amount}</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  title: {
    fontFamily: 'Helvetica',
    lineHeight: 20,
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  wrapper: {
    backgroundColor: '#f5f8fa',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  imageWrapper: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  textBlock: {
    flex: 2,
    paddingRight: 20,
  },
};
