import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../shared/styles';
import {FormFooter} from './FormFooter';
import {Spacer} from '../components/Spacer';
import {FormHeader} from './FormHeader';
import {CustomTextInput} from '../components/CustomTextInput';
import {Label} from '../components/Label';

interface FormPropsI {
  hideModal: () => void;
  handleSubmit: (data: FormDataStateI) => void;
}

interface FormDataStateI {
  email: {
    value: string;
    error: null | string;
  };
  number: {
    error: null | string;
    value: string;
  };
}

export const Form: React.FC<FormPropsI> = ({hideModal, handleSubmit}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [formData, setFormData] = React.useState<FormDataStateI>({
    email: {
      value: '',
      error: null,
    },
    number: {
      error: null,
      value: '',
    },
  });

  const handleValue = React.useCallback((key: keyof FormDataStateI) => {
    return (value: string) => {
      setFormData(prevState => {
        return {
          ...prevState,
          [key]: {...prevState[key], value: value, error: null},
        };
      });
    };
  }, []);

  const onSubmitPress = () => {
    const values = formData.number.value.split('');
    let i = 0;

    while (i < values.length) {
      if (values[i] !== '-' && values[i] !== '—') {
        if (isNaN(Number(values[i]))) {
          setFormData(prevState => {
            return {
              ...prevState,
              ['number']: {...prevState.number, error: 'Should be number'},
            };
          });
          return;
        }
      }
      i++;
    }

    setFormData(prevState => {
      return {
        ...prevState,
        ['number']: {...prevState.number, error: null},
      };
    });
    handleSubmit(formData);
  };

  return (
    <View style={styles.formWrapper}>
      <FormHeader hideModal={hideModal} name={'SHOP NAME'} amount={'20, 350'} />
      <View style={styles.alignMainBLock}>
        <Label value="メールアドレス" />
        <CustomTextInput
          value={formData.email.value}
          handleValue={handleValue('email')}
          iconType="email"
        />
        <Spacer />
        <Label value="携帯電話番号" />
        <CustomTextInput
          value={formData.number.value}
          iconType="cellphone"
          handleValue={handleValue('number')}
        />
        {formData.number.error && (
          <View style={styles.errorBlock}>
            <Text style={{color: colors.mainRed}}>Should be digit or - </Text>
          </View>
        )}
        <Spacer />

        <View style={styles.acceptanceWrapper}>
          <View style={styles.checkBoxWrapper}>
            {Platform.OS === 'ios' ? (
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                boxType={'square'}
                tintColor={colors.mainLight}
                onTintColor={colors.mainLight}
                hideBox
                style={styles.iosCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            ) : (
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                tintColors={{true: colors.mainBlue, false: 'transparent'}}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            )}
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={styles.text}>次回 入力在省略</Text>
          </View>
        </View>

        <Spacer height={40} />
        <View style={styles.moreInfoBlock}>
          <Text>
            <Text style={[styles.text, {color: colors.mainBlue}]}>
              Paidy の利用規約•個人情報取报案項{' '}
            </Text>
            <Text style={styles.text}>仁同意山了</Text>
          </Text>
        </View>
        <Spacer />
        <TouchableOpacity onPress={onSubmitPress} style={styles.buttonWrapper}>
          <LinearGradient
            style={styles.linearGradient}
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 0.5}}
            locations={[0, 0.6]}
            colors={['#468ee8', '#2e68cf']}>
            <Text style={styles.buttonText}>次へ</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <FormFooter />
    </View>
  );
};

var styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: colors.mainLight,
    borderRadius: 5,
    flexDirection: 'column',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  subtitle: {
    fontFamily: 'Helvetica',
    lineHeight: 20,
    fontSize: 20,
    fontWeight: '400',
    color: colors.mainDark,
  },
  errorBlock: {
    alignItems: 'flex-start',
  },
  acceptanceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxWrapper: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#77adf0',
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosCheckBox: {
    transform: [{scaleX: 0.6}, {scaleY: 0.8}, {translateX: 3}, {translateY: 2}],
    alignSelf: 'center',
  },
  androidCheckBox: {},
  moreInfoBlock: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Gill Sans',
    fontSize: 12,
  },
  buttonWrapper: {
    paddingHorizontal: 50,
  },
  alignMainBLock: {
    padding: 20,
  },
});
